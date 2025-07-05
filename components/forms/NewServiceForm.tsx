'use client';

import React, {useCallback, useState} from 'react';
import FormTextInput from "@/components/FormTextInput";
import ImageUploadComponent from "@/components/forms/ImageUploadComponent";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import FormButton from "@/components/FormButton";

interface NewServiceFormProps {
    onBack: () => void,
    onSubmit: () => void;
}
const NewServiceForm: React.FC<NewServiceFormProps> = ({onBack, onSubmit}) => {

    const [serviceCapacity, setServiceCapacity] = useState(250);
    const [menuStartPrice, setMenuStartPrice] = useState(200);


    const validateFormFields = () => {
        return serviceCapacity > 0 && menuStartPrice > 0;
    };

    const handleSubmit = () => {
        const isValid = validateFormFields();
        if (isValid) {
            onSubmit();
        } else {
            alert("Capacitatea sala si pretul de start al meniului trebuie sa fie mai mare decat 0.");
        }
    };

    const handleServiceCapacityChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setServiceCapacity(Number(e.target.value));
    }, []);

    const handleMenuPriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMenuStartPrice(Number(e.target.value));
    }, []);

    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Generale</h2>

            {/* Service Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Service capacity */}

                    <FormTextInput
                        label="Capacitate sala"
                        type="number"
                        value={serviceCapacity}
                        edit={true}
                        onChange={handleServiceCapacityChange}
                    />

                {/* Service price */}
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
                <FormButton label='Inapoi' darkMode={false} onClick={onBack}/>
                <FormButton label='Urmatorul pas' darkMode={true} onClick={handleSubmit}/>
            </div>
        </div>
    );
};

export default NewServiceForm;
