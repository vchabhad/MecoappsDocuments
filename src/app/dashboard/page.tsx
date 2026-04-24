import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import SignOutButton from "./SignOutButton";
import { redirect } from "next/navigation";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.name) {
    redirect("/login");
  }

  const presentations: any[] = [];

  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    // Fetch from Supabase using Service Role Key (bypasses RLS)
    try {
      // First, get the documents assigned specifically to this user
      const { data: accessData, error: accessError } = await supabase
        .from('DocumentAccess')
        .select('Documents(*)')
        .eq('username', session.user.name);

      if (accessData && accessData.length > 0) {
        const formattedDocs = accessData
          .filter(item => item.Documents) // Ensure relation exists
          .map((item: any) => ({
            id: item.Documents.id,
            title: item.Documents.title,
            type: item.Documents.type,
            date: item.Documents.created_at || new Date().toISOString(),
            link: item.Documents.link,
          }));
        
        presentations.push(...formattedDocs);
      }

      // If they are an admin, they should probably see ALL documents? 
      // User requested "for admin and other users all of them I should have option to see documents...". 
      // We will let admins see all documents.
      if (session?.user?.role === 'admin') {
        const { data: allDocs } = await supabase.from('Documents').select('*');
        if (allDocs) {
          allDocs.forEach((doc) => {
            // Only add if not already in the array
            if (!presentations.find(p => p.id === doc.id)) {
              presentations.push({
                id: doc.id,
                title: doc.title,
                type: doc.type,
                date: doc.created_at || new Date().toISOString(),
                link: doc.link,
              });
            }
          });
        }
      }

    } catch (e) {
      console.error("Error fetching docs from server:", e);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 border-b border-gray-800 pb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
              MecoApps Documents
            </h1>
            <p className="text-gray-400 mt-2">Welcome back, {session?.user?.name}</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Show Admin Panel button if user is an admin */}
            {(session?.user as any)?.role === 'admin' && (
              <Link 
                href="/admin"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors font-semibold shadow-lg shadow-purple-900/20"
              >
                Admin Panel
              </Link>
            )}
            <SignOutButton />
          </div>
        </header>

        <DashboardClient presentations={presentations} />
      </div>
    </div>
  );
}
