import NextAuth from "next-auth"
import {UserRole} from "@prisma/client";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from "@/lib/db";
import authConfig from "@/auth.config";
import {getUserById} from "@/data/user";
import {ExtendedUser} from "@/next-auth";

export const {
    handlers: {GET, POST},
    auth, signIn, signOut
} = NextAuth({
    callbacks: {
        // check is email verified?
        // async signIn({user}) {
        //     const existingUser = await getUserById(user.id as string);
        //
        //     return !(!existingUser || !existingUser.emailVerified);
        // },
        async session({token, session}) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }

            return session;
        },
        async jwt({token}) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.role = existingUser.role;
            return token;
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig
})