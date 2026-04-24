"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { supabase } from "@/lib/supabase";
import fs from "fs";
import path from "path";

export async function uploadDocument(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");

  const file = formData.get("file") as File;
  const title = formData.get("title") as string;
  const type = formData.get("type") as string; 

  if (!file || !title || !type) throw new Error("Missing required fields.");

  const fileExt = file.name.split('.').pop();
  const fileName = `${crypto.randomUUID()}.${fileExt}`;
  const filePath = `${fileName}`; 

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { error: uploadError } = await supabase.storage
    .from('presentations')
    .upload(filePath, buffer, { contentType: file.type, upsert: false });

  if (uploadError) throw new Error(`Failed to upload: ${uploadError.message}`);

  const { data: publicUrlData } = supabase.storage
    .from('presentations')
    .getPublicUrl(filePath);

  const documentId = crypto.randomUUID();
  const { error: dbError } = await supabase
    .from('Documents')
    .insert({
      id: documentId,
      title: title,
      type: type,
      link: publicUrlData.publicUrl,
      created_at: new Date().toISOString()
    });

  if (dbError) throw new Error(`Failed to insert metadata: ${dbError.message}`);

  return { success: true };
}

export async function registerWebDocument(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");

  const title = formData.get("title") as string;
  let link = formData.get("link") as string;
  
  if (!title || !link) throw new Error("Missing required fields.");

  // If they just typed "my-presentation", automatically format it to "/view/my-presentation"
  if (!link.startsWith("/") && !link.startsWith("http")) {
    link = `/view/${link}`;
  }

  const documentId = crypto.randomUUID();
  const { error: dbError } = await supabase
    .from('Documents')
    .insert({
      id: documentId,
      title: title,
      type: 'web',
      link: link,
      created_at: new Date().toISOString()
    });

  if (dbError) throw new Error(`Failed to insert metadata: ${dbError.message}`);
  return { success: true };
}

export async function fetchUsers() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");
  const { data, error } = await supabase.from('Users').select('*');
  if (error) throw new Error(error.message);
  return data;
}

export async function fetchLocalWebPresentations() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");

  const viewDir = path.join(process.cwd(), 'src', 'app', 'view');
  try {
    const entries = fs.readdirSync(viewDir, { withFileTypes: true });
    // Return only directories (which represent the routes)
    return entries
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
  } catch (e) {
    console.error("Error reading views directory:", e);
    return [];
  }
}

export async function fetchDocuments() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");
  const { data, error } = await supabase.from('Documents').select('*');
  if (error) throw new Error(error.message);
  return data;
}

export async function fetchAccessLogs() {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");
  const { data, error } = await supabase.from('DocumentAccess').select('*, Documents(*)');
  if (error) throw new Error(error.message);
  return data;
}

export async function grantAccess(username: string, documentId: string) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");
  const { error } = await supabase.from('DocumentAccess').insert({ username, document_id: documentId });
  if (error) throw new Error(error.message);
  return { success: true };
}

export async function revokeAccess(accessId: number) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");
  const { error } = await supabase.from('DocumentAccess').delete().eq('id', accessId);
  if (error) throw new Error(error.message);
  return { success: true };
}

export async function createUser(formData: FormData) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");

  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  if (!username || !password || !role) throw new Error("Missing fields.");

  const { error } = await supabase.from('Users').insert({ username, password, role });
  if (error) throw new Error(`Failed to create user: ${error.message}`);
  return { success: true };
}

export async function deleteUser(userId: number) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");

  // Prevent admin from deleting themselves!
  if (session?.user?.id === userId.toString()) throw new Error("Cannot delete your own account.");

  const { error } = await supabase.from('Users').delete().eq('id', userId);
  if (error) throw new Error(error.message);
  return { success: true };
}

export async function deleteDocument(documentId: string) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");

  // Also delete all access rules associated with it
  await supabase.from('DocumentAccess').delete().eq('document_id', documentId);

  const { error } = await supabase.from('Documents').delete().eq('id', documentId);
  if (error) throw new Error(error.message);
  return { success: true };
}

export async function updateUserPassword(userId: number, newPassword: string) {
  const session = await getServerSession(authOptions);
  if (session?.user?.role !== 'admin') throw new Error("Unauthorized");

  const { error } = await supabase
    .from('Users')
    .update({ password: newPassword })
    .eq('id', userId);

  if (error) throw new Error(error.message);
  return { success: true };
}
