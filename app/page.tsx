import { sql } from '@vercel/postgres';
import HomePage from "@/app/HomePage";

export default async function Home() {
    const {rows, fields} =  await sql`SELECT * FROM restaurant r LEFT JOIN venue v ON r.id = v.restaurant_id;`;
    return (
        <HomePage initialData={rows}/>
    );
}
