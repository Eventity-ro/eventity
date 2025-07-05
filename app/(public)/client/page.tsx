import { getPartners } from "@/lib/api";
import ClientPage from "@/app/(public)/client/ClientPage";
import MobileClientPage from "@/app/(public)/client/MobileClientPage";

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

    return (
        <>
            <div className="block md:hidden">
                <MobileClientPage partners={partners}/>
            </div>
            <div className="hidden md:block">
                <ClientPage partners={partners}/>
            </div>
        </>
    );
};

export default Client;


