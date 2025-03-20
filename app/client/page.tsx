import {getPartners} from "@/lib/api";
import ClientPage from "@/app/client/ClientPage";

const Client = async ({ searchParams }) => {

    const restaurantId = searchParams.restaurantId;

    const partners = await getPartners(restaurantId);

    return (
        <ClientPage partners={partners}/>
    );
};

export default Client;
