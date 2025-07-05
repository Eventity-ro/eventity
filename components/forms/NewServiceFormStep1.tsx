'use client';

import React, {useCallback, useState} from 'react';
import FormTextInput from "@/components/FormTextInput";
import FormDropdownComponent from "@/components/FormDropdownComponent";
import FormButton from "@/components/FormButton";
import ImageUploadComponent from "@/components/forms/ImageUploadComponent";

interface NewClientFormProps {
    onBack: () => void,
    onSubmit: ({}) => void;
}
const NewServiceFormStep1: React.FC<NewClientFormProps> = ({onBack, onSubmit}) => {
    const [serviceType, setServiceType] = useState('');
    const [minServiceCapacity, setMinServiceCapacity] = useState(0);
    const [maxServiceCapacity, setMaxServiceCapacity] = useState(0);
    const [menuStartPrice, setMenuStartPrice] = useState(200);

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

    // const validateFormFields = () => {
    //     return clientName.trim() !== '' &&
    //            clientPhoneNumber.trim() !== '' &&
    //            clientEmail.trim() !== '' &&
    //            clientInstagram.trim() !== '' &&
    //            clientFacebook.trim() !== '';
    // };

    const handleSubmit = () => {
        // const isValid = validateFormFields();
        // if (isValid) {
        // } else {
        //     alert("Please complete all required fields.");
        // }
        onSubmit({serviceType: serviceType, minServiceCapacity: minServiceCapacity, maxServiceCapacity: maxServiceCapacity, menuStartPrice: menuStartPrice});

    };

    const handleMenuPriceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMenuStartPrice(Number(e.target.value));
    }, []);

    const handleServiceTypeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setServiceType(e.target.value);
    }, []);

    const handleServiceCapacityChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        // Match either "number" or "number-number"
        const value = e.target.value;

        const rangeMatch = value.match(/^(\d+)-(\d+)$/);
        const singleMatch = value.match(/^(\d+)$/);

        if (rangeMatch) {
            // It's a range: "min-max"
            setMinServiceCapacity(Number(rangeMatch[1]));
            setMaxServiceCapacity(Number(rangeMatch[2]));
        } else if (singleMatch) {
            // It's a single number: "max"
            setMinServiceCapacity(1); // or set to 0 if that's your convention
            setMaxServiceCapacity(Number(singleMatch[1]));
        }
    }, []);

    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Generale</h2>

            {/* Service selection */}
            <div className="mb-2">
                <FormDropdownComponent
                    options={serviceOptions}
                    value={serviceType}
                    onChange={handleServiceTypeChange}
                />
            </div>

            {/* Client Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FormTextInput
                    label="Pretul incepand de la /meniu (lei)"
                    type="number"
                    value={menuStartPrice}
                    edit={true}
                    onChange={handleMenuPriceChange}
                />
                <FormDropdownComponent
                    options={capacityOptions}
                    value={minServiceCapacity + '-' + maxServiceCapacity}
                    onChange={handleServiceCapacityChange}
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

export default NewServiceFormStep1;
