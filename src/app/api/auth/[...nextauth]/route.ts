import NextAuth, { NextAuthOptions } from "next-auth"
import { supabase } from "@/lib/supabase"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // 1. Fallback for local demo without Supabase keys
        if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
          console.warn("No Supabase keys found. Using demo credentials.");
          if (credentials?.username === "admin" && credentials?.password === "password") {
            return { id: "1", name: "Admin", email: "admin@mecoapps.in", role: "admin" }
          }
          if (credentials?.username === "VISH001" && credentials?.password === "Vishal123") {
            return { id: "2", name: "VISH001", email: "VISH001@mecoapps.in", role: "admin" }
          }
          return null;
        }

        // 2. Production: Verify against Supabase Users table
        try {
          // Hardcoded Admin Override for VISH001
          if (credentials?.username === "VISH001" && credentials?.password === "Vishal123") {
            return { id: "2", name: "VISH001", email: "VISH001@mecoapps.in", role: "admin" };
          }

          // Auto-init check: See if any admin exists
          const { data: admins, error: adminCheckError } = await supabase
            .from('Users')
            .select('id')
            .eq('role', 'admin')
            .limit(1);

          if (!adminCheckError && (!admins || admins.length === 0)) {
            // No admins exist! Create default admin
            await supabase.from('Users').insert({
              username: 'admin',
              password: 'password',
              role: 'admin'
            });
            console.log("Created default admin user.");
          }

          const { data: user, error } = await supabase
            .from('Users')
            .select('*')
            .eq('username', credentials?.username)
            .single();

          if (error || !user) {
            return null;
          }

          if (user.password === credentials?.password) {
            return { 
              id: user.id.toString(), 
              name: user.username, 
              email: `${user.username}@mecoapps.in`,
              role: user.role || 'viewer' 
            };
          }
          
          return null;
        } catch (e) {
          console.error("Supabase auth error:", e);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
    maxAge: 2 * 60 * 60, // 2 hours
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
