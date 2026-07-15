import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import AiCourseClient from "./AiCourseClient";

export default async function AiCoursePage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.name) {
    redirect("/login");
  }

  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    // Admins always get access to everything
    if (session?.user?.role !== 'admin') {
      // Check if the user has explicitly been granted access
      const { data, error } = await supabase
        .from('DocumentAccess')
        .select('document_id')
        .eq('username', session.user.name)
        .eq('document_id', 'ai-course');

      if (!data || data.length === 0) {
        return (
          <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="text-center p-8 bg-gray-800 rounded-xl border border-gray-700">
              <h1 className="text-4xl font-bold text-red-500 mb-4">Access Denied</h1>
              <p className="text-gray-400 mb-6">You do not have permission to view this interactive presentation.</p>
              <a href="/dashboard" className="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded text-white transition">
                Return to Dashboard
              </a>
            </div>
          </div>
        );
      }
    }
  }

  // If access is granted (or we are an admin), render the presentation!
  return <AiCourseClient />;
}
