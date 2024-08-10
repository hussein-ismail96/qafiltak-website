import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      type: "credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "admin" };
        try {
          console.log("Credentials:", credentials);
          if (
            credentials?.username === "admin" &&
            credentials?.password === "admin"
          ) {
            console.log("Authorized user:", user);
            return user;
          }
        } catch (err) {
          console.error("Authorization error:", err);
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, trigger, session }) {
      return { ...token, ...user };
    },
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
