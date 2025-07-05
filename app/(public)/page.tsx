import HomePage from "@/app/(public)/HomePage";
import {getRestaurants} from "@/lib/api";

export default async function Home() {
    const restaurants = await getRestaurants();

    return (
        <HomePage initialData={restaurants}/>
    );
}
