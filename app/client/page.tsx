import {getPartners} from "@/lib/api";
import ClientPage from "@/app/client/ClientPage";

interface Props {
    searchParams?: {
        restaurantId?: string;
    };
}

const Client = async ({ searchParams }: Props) => {

    const restaurantId = searchParams?.restaurantId;

    if (!restaurantId) {
        return <div>No restaurant selected.</div>;
    }

    const partners = await getPartners(restaurantId);

    return (
        <ClientPage partners={partners}/>
    );
};

export default Client;
