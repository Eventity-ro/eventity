'use client'

import useSWR from 'swr';
import HomeCard from "@/components/HomeCard";
import exampleImage1 from "@/images/Example1.jpg"
import exampleImage2 from "@/images/Example2.jpg"
import Link from "next/link";
import React, {useState} from "react";
import {useDisclosure} from "@heroui/react";
import AddPartnerModal from "@/components/modals/AddPartnerModal";
import Partner from "@/types/partner";
import Venue from "@/types/venue";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const imageList = [exampleImage1, exampleImage2, exampleImage1, exampleImage2, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1, exampleImage1]

const ServicesPage = ({restaurants}: {restaurants: Venue[]}) => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const { data: unassociatedPartners, mutate: mutateUnassociated } = useSWR<Partner[]>(
        `/api/unassociated-partners`,
        fetcher
    );
    const { data: associatedPartners, mutate: mutateAssociated } = useSWR<Partner[]>(
        `/api/associated-partners`,
        fetcher
    );

    const [isAdding, setIsAdding] = useState(false);

    const handleAddPartner = async (partnerId: number, restaurantID: number) => {
        setIsAdding(true);
        try {
            const res = await fetch('/api/add-partner', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ restaurantID, partnerId }),
            });

            if (!res.ok) {
                console.error('Failed to add partner');
                return;
            }

            // Revalidate the SWR caches to update the lists.
            await mutateUnassociated();
            await mutateAssociated();
        } catch (error) {
            console.error('Error adding partner', error);
        } finally {
            setIsAdding(false);}
    };

    if (!unassociatedPartners || !associatedPartners) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex-1 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold my-10">Servicii</h2>

            <Link className="bg-[#5C8171] text-white px-6 py-2 rounded" href={"/admin/services/new"}>
                Adauga serviciu nou
            </Link>

            <h2 className="text-2xl font-bold my-6">Serviciile Mele</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
                {
                    restaurants.map((card, index) => (
                        <div key={index}>
                            <HomeCard name={card.name} location={card.city} restaurantId={card.restaurant_id}
                                      startingPrice={card.price} imageList={imageList} rating={card.rating}
                                      minCapacity={card.minCapacity} maxCapacity={card.maxCapacity}/>

                            <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5"
                                  href={"/admin/services/account-details"}>
                                Editeaza
                            </Link>
                        </div>
                    ))
                }
            </div>

            <h2 className="text-2xl font-bold my-4">Partenerii Mei</h2>

            <div>
                {
                    associatedPartners.map((partner, index) => (
                        partner.name
                    ))
                }
            </div>

            <button className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" onClick={() => handleAddPartner(4, 6)}>
                Adaugă parteneri
            </button>

            <AddPartnerModal isOpen={isOpen} onOpenChange={onOpenChange}/>

        </div>
    );
}

export default ServicesPage;
