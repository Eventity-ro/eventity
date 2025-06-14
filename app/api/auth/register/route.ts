import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();
        console.log("Received:", name, email, password);

        if (!name || !email || !password) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        const existing = await sql`SELECT * FROM "user" WHERE "email" = ${email}`;
        if (existing.rows.length > 0) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashed = await bcrypt.hash(password, 10);

        await sql`
      INSERT INTO "user" ("name", "email", "password")
      VALUES (${name}, ${email}, ${hashed})
    `;

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (err) {
        console.error("Registration error:", err);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}
