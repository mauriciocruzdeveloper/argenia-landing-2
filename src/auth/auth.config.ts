import type { NextAuthConfig } from 'next-auth';
import bcrypt from 'bcryptjs' 
import google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { User } from '../definitions/definitions';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID ?? '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET ?? '';

console.log('!!!GOOGLE_CLIENT_ID', GOOGLE_CLIENT_ID);
console.log('!!!GOOGLE_CLIENT_SECRET', GOOGLE_CLIENT_SECRET);

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
  console.error('Google Client ID or Secret is missing.');
}

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth }) {
      console.log('!!! authorized callback', auth)
      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) return true;
      return false; // Redirect unauthenticated users to login page
    },

    async session({ session, token, user }) {
      session.user = token.user as any;
      return session;
    },
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
  providers: [
    google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        console.log('Authorizing credentials:',
          JSON.stringify(credentials, null, 2));
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);
          
          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  // session: {
  //   strategy: 'jwt',
  //   maxAge: 1 * 24 * 60 * 60, // 1 day
  // },
  secret: process.env.NEXT_PUBLIC_SECRET,
} satisfies NextAuthConfig;