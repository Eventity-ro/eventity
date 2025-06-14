import {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {sql} from "@vercel/postgres";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials ?? {};

                if (!email || !password) {
                    console.log("❌ Missing email or password");
                    return null;
                }

                const result = await sql`SELECT * FROM "user" WHERE "email" = ${email}`;
                const user = result.rows[0];

                if (!user) {
                    console.log("❌ User not found");
                    return null;
                }

                const isValid = await bcrypt.compare(password, user.password);
                if (!isValid) {
                    console.log("❌ Invalid password");
                    return null;
                }

                console.log("✅ Login successful for:", email);

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name ?? null,
                };
            },
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider !== "credentials") {
                const existing = await sql`
          SELECT * FROM "user" WHERE email = ${user.email};
        `;
                if (existing.rows.length === 0) {
                    await sql`
            INSERT INTO "user" (email, name)
            VALUES (${user.email}, ${user.name});
          `;
                }
            }
            return true;
        },

        async jwt({ token, user }) {
            if (user?.email) {
                const result = await sql`
          SELECT id FROM "user" WHERE email = ${user.email};
        `;
                token.userId = result.rows[0]?.id;
            }
            return token;
        },

        async session({ session, token }) {
            if (token.userId && session.user) {
                session.user.id = token.userId;
            }
            return session;
        },
    },
};
