import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
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
          } else {
            throw new Error("Invalid username or password");
          }
        } catch (err) {
          console.error("Authorization error:", err);
        }

        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user, account, profile, trigger, session }) {
      console.group("---------------------jwt---------------------");
      console.log("token ------> ", token);
      console.log("user ------> ", user);
      console.log("account ------> ", account);
      console.log("profile ------> ", profile);
      console.log("trigger ------> ", trigger);
      console.log("session ------> ", session);
      console.groupEnd();
      return { ...token, ...user, token :'this is test token'};
    },
    session({ session, token, user }) {
      console.group("---------------------session---------------------");
      console.log("session ------> ", session);
      console.log("token ------> ", token);
      console.log("user ------> ", user);
      console.groupEnd();
      return session;
    },
  },
  logger: {
    error(code, metadata) {
      console.error(
        `---------------> next-auth-${code}:`,
        JSON.stringify({ code, metadata: JSON.stringify(metadata) })
      );
    },
    warn(code) {
      console.warn(
        `---------------> next-auth-warning: ${JSON.stringify(code)}`
      );
    },
    debug(code, metadata) {
      console.debug(
        `---------------> next-auth-${code}:`,
        JSON.stringify({ code, metadata: JSON.stringify(metadata) })
      );
    },
  },
};

export default options;
