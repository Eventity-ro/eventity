'use client';

import React, {useCallback, useState} from 'react';
import FormTextInput from "@/components/FormTextInput";
import FormDropdownComponent from "@/components/FormDropdownComponent";
import FormButton from "@/components/FormButton";
import {useRouter} from "next/navigation";

interface NewAdminFormProps {
    onSubmitButtonText?: string;
}
const NewAdminForm: React.FC<NewAdminFormProps> = ({onSubmitButtonText = "Urmatorul pas"}) => {

    const router = useRouter();

    const options = [
        'Sala nunti',
        'Fotograf',
        'DJ',
        'Barman',
    ];

    const [serviceType, setServiceType] = useState(options[0]);
    const [clientName, setClientName] = useState('');
    const [clientPhoneNumber, setClientPhoneNumber] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientInstagram, setClientInstagram] = useState('');
    const [clientFacebook, setClientFacebook] = useState('');

    const validateFormFields = () => {
        return serviceType !== null &&
            clientName.trim() !== '' &&
            clientPhoneNumber.trim() !== '' &&
            clientEmail.trim() !== '';
    };

    const handleSubmit = async () => {
        const isValid = validateFormFields();
        if (!isValid) {
            alert("Please complete all required fields.");
            return;
        }

        const payload = {
            type: serviceType, // trebuie să iei valoarea din dropdown
            name: clientName,
            phone: clientPhoneNumber,
            email: clientEmail,
            instagram: clientInstagram,
            facebook: clientFacebook,
        };

        try {
            const res = await fetch('/api/onboarding', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                router.push('/success');
            } else {
                const data = await res.json();
                alert("Eroare: " + data.error || "Ceva n-a mers");
            }
        } catch (err) {
            console.error("Eroare la trimitere:", err);
            alert("Eroare de rețea");
        }
    };

    const handleClientNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setClientName(e.target.value);
    }, []);

    const handleClientPhoneNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setClientPhoneNumber(e.target.value);
    }, []);

    const handleClientEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setClientEmail(e.target.value);
    }, []);

    const handleClientInstagramChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setClientInstagram(e.target.value);
    }, []);

    const handleClientFacebookChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setClientFacebook(e.target.value);
    }, []);

    const handleServiceTypeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setServiceType(e.target.value);
    }, []);

    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Informații client</h2>

            {/* Service selection */}
            <div className="mb-2">
                <FormDropdownComponent
                    options={options}
                    value={serviceType}
                    onChange={handleServiceTypeChange}
                />
            </div>

            {/* Client Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FormTextInput
                    label="Denumire client *"
                    type="text"
                    value={clientName}
                    edit={true}
                    onChange={handleClientNameChange}
                />
                <FormTextInput
                    label="Telefon *"
                    type="phone"
                    value={clientPhoneNumber}
                    edit={true}
                    onChange={handleClientPhoneNumberChange}
                />
                <FormTextInput
                    label="E-mail *"
                    type="email"
                    value={clientEmail}
                    edit={true}
                    onChange={handleClientEmailChange}
                />
                <FormTextInput
                    label="Instagram"
                    type="text"
                    value={clientInstagram}
                    edit={true}
                    onChange={handleClientInstagramChange}
                />
            </div>

            <div className="mt-2">
                <FormTextInput
                    label="Facebook"
                    type="text"
                    value={clientFacebook}
                    edit={true}
                    onChange={handleClientFacebookChange}
                />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
                <FormButton label={onSubmitButtonText} darkMode={true} onClick={handleSubmit}/>
            </div>
        </div>
    );
};

export default NewAdminForm;
