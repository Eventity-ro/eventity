'use client'

import React, {useCallback, useState} from 'react';
import {Textarea} from "@heroui/react";
import FormMultiselectInput from "@/components/FormMultiselectInput";
import Link from "next/link";
import FormDropdownComponent from "@/components/FormDropdownComponent";
import FormTextInput from "@/components/FormTextInput";

const RestaurantVenusPage: React.FC = () => {
    const serviceOptions = [
        'Sala nunti',
        'Fotograf',
        'DJ',
        'Barman',
    ];

    const capacityOptions = [
        '100',
        '100-200',
        '200-300',
        '300-400',
        '400-500'
    ];

    const handleMenuPriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMenuStartPrice(Number(e.target.value));
    }, []);

    const [venueCapacity, setVenueCapacity] = useState(250);
    const [menuStartPrice, setMenuStartPrice] = useState(200);

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold">Restaurant Venus</h1>

            <section className="space-y-4">
                <h2 className="text-lg font-semibold">Generale</h2>
                <div className="grid grid-cols-1 gap-4">
                    <div className="mb-2">
                        <FormDropdownComponent label='Alege serviciul oferit' options={serviceOptions}/>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <FormTextInput
                            label="Pretul incepand de la /meniu (lei)"
                            type="number"
                            value={menuStartPrice}
                            edit={true}
                            onChange={handleMenuPriceChange}
                        />
                        <FormDropdownComponent label='Capacitate Sala' options={capacityOptions}/>
                    </div>
                </div>
            </section>

            <section>
                <Textarea label="Alte detalii" placeholder=""/>
            </section>

            <section>
                <FormMultiselectInput/>
            </section>

            {/* Fourth Section */}
            <section className="space-y-4">
                <div className="flex space-x-4">
                    <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services"}>Salveaza</Link>
                    <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services"}>Ieșire</Link>
                </div>
                <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services"}>Stergere permanenta</Link>
            </section>
        </div>
    );
};

export default RestaurantVenusPage;
