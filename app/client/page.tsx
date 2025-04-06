import { getPartners } from "@/lib/api";
import ClientPage from "@/app/client/ClientPage";

const Client = async ({
                          searchParams,
                      }: {
    searchParams: { restaurantId?: string };
}) => {
    const restaurantId = searchParams?.restaurantId;

    if (!restaurantId) {
        return <div>No restaurant selected.</div>;
    }

    const partners = await getPartners(restaurantId);

    return <ClientPage partners={partners} />;
};

export default Client;
