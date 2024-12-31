'use client';

import React, {useCallback, useState} from 'react';
import FormTextInput from "@/components/FormTextInput";
import ImageUploadComponent from "@/components/forms/ImageUploadComponent";
import Link from "next/link";

const NewVenueForm = () => {

    const [venueCapacity, setVenueCapacity] = useState(250);
    const [menuStartPrice, setMenuStartPrice] = useState(200);

    const handleVenueCapacityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setVenueCapacity(Number(e.target.value));
    }, []);

    const handleMenuPriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMenuStartPrice(Number(e.target.value));
    }, []);

    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Generale</h2>

            {/* Venue Information */}
            <div className="grid grid-cols-2 gap-2">
                {/* Venue capacity */}
                <div>
                    <FormTextInput
                        label="Capacitate sala"
                        type="number"
                        value={venueCapacity}
                        edit={true}
                        onChange={handleVenueCapacityChange}
                    />
                </div>

                {/* Venue price */}
                <div>
                    <FormTextInput
                        label="Pret incepand de la/ meniu (lei)"
                        type="number"
                        value={menuStartPrice}
                        edit={true}
                        onChange={handleMenuPriceChange}
                    />
                </div>
            </div>

            <div className="w-full mt-4">
                <ImageUploadComponent/>
            </div>

            {/* Submit Button */}
            <div className="mt-20 flex justify-end gap-2">
                <div className="w-1/2">
                    {/*<FormButton label='Inapoi' darkMode={false} onClick={() => console.log('Inapoi')}/>*/}
                    <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services/new"}>
                        Inapoi
                    </Link>
                </div>
                <div className="w-1/2">
                    {/*<FormButton label='Urmatorul pas' darkMode={true} onClick={() => console.log('Urmatorul pas')}/>*/}
                    <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services/new/details"}>
                        Urmatorul Pas
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewVenueForm;
