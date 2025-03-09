'use client';

import React, {useCallback, useState} from 'react';
import FormTextInput from "@/components/FormTextInput";
import ImageUploadComponent from "@/components/forms/ImageUploadComponent";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import FormButton from "@/components/FormButton";

const NewVenueForm = () => {

    const searchParams = useSearchParams();

    const name = searchParams.get('name');

    const [venueCapacity, setVenueCapacity] = useState(250);
    const [menuStartPrice, setMenuStartPrice] = useState(200);

    const sendDict = {
        name: name,
        capacity: venueCapacity,
        price: menuStartPrice
    }

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Venue capacity */}

                    <FormTextInput
                        label="Capacitate sala"
                        type="number"
                        value={venueCapacity}
                        edit={true}
                        onChange={handleVenueCapacityChange}
                    />

                {/* Venue price */}
                    <FormTextInput
                        label="Pret incepand de la/ meniu (lei)"
                        type="number"
                        value={menuStartPrice}
                        edit={true}
                        onChange={handleMenuPriceChange}
                    />
            </div>

            <div className="w-full mt-4">
                <ImageUploadComponent/>
            </div>

            {/* Submit Button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FormButton label='Inapoi' darkMode={false} onClick={() => console.log('Inapoi')}/>
                <FormButton label='Urmatorul pas' darkMode={true} onClick={() => console.log('Urmatorul pas')}/>
            </div>
        </div>
    );
};

export default NewVenueForm;
