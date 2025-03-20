import { sql } from '@vercel/postgres';
import HomePage from "@/app/HomePage";
import {getRestaurants} from "@/lib/api";

export default async function Home() {
    const restaurants = await getRestaurants();

    return (
        <HomePage initialData={restaurants}/>
    );
}
