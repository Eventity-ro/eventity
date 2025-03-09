'use client';

import React, {useCallback, useState} from 'react';
import FormTextInput from "@/components/FormTextInput";
import FormButton from "@/components/FormButton";
import ImageUploadComponent from "@/components/forms/ImageUploadComponent";

const NewOtherForm = () => {

    const [startPrice, setStartPrice] = useState(200);

    const handleStartPriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setStartPrice(Number(e.target.value));
    }, []);

    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Generale</h2>

            {/* Information */}
            <div className="w-full">

                {/* Price */}
                <div>
                    <FormTextInput
                        label="Pret incepand de la/ meniu (lei)"
                        type="number"
                        value={startPrice}
                        edit={true}
                        onChange={handleStartPriceChange}
                    />
                </div>
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

export default NewOtherForm;
