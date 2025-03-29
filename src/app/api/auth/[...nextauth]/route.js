import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@/lib/db";
import User from "../../../../../models/User";
import { generateToken } from "@/lib/auth";
import dotenv from "dotenv";
dotenv.config();


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      await connectDB();

      let user = await User.findOne({ email: profile.email });
      if (!user) {
        user = await User.create({
          googleId: profile.sub,
          name: profile.name,
          email: profile.email,
          avatar: profile.picture,
        });
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user) token.jwt = generateToken(user);
      return token;
    },
    async session({ session, token }) {
      session.jwt = token.jwt;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
