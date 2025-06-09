import { getPartners } from "@/lib/api";
import ClientPage from "@/app/(public)/client/ClientPage";

const Client = async ({
                          searchParams,
                      }: {
    searchParams: Promise<{ [key: string]: string }>
}) => {
    const {restaurantId} = await searchParams;

    if (!restaurantId) {
        return <div>No restaurant selected.</div>;
    }

    const partners = await getPartners(restaurantId);

    return <ClientPage partners={partners} />;
};

export default Client;
