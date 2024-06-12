import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }
      // ***************************************************************
      // added code
      if (trigger === "update" && session) {
        token = {...token, user : session}
        return token;
      };
       // **************************************************************
      return token;
    },
  },
});