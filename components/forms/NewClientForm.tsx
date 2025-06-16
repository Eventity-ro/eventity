'use client';

import React, {useCallback, useState} from 'react';
import FormTextInput from "@/components/FormTextInput";
import FormDropdownComponent from "@/components/FormDropdownComponent";
import FormButton from "@/components/FormButton";

interface NewClientFormProps {
    onSubmit: ({}) => void;
    onSubmitButtonText?: string;
}
const NewClientForm: React.FC<NewClientFormProps> = ({onSubmit, onSubmitButtonText = "Urmatorul pas"}) => {

    const [clientName, setClientName] = useState('Restaurant Venus');
    const [clientPhoneNumber, setClientPhoneNumber] = useState('0755123456');
    const [clientEmail, setClientEmail] = useState('venus@contact.com');
    const [clientInstagram, setClientInstagram] = useState('@restaurantvenus');
    const [clientFacebook, setClientFacebook] = useState('restaurantvenus');

    const options = [
        'Sala nunti',
        'Fotograf',
        'DJ',
        'Barman',
    ];

    const validateFormFields = () => {
        return clientName.trim() !== '' &&
               clientPhoneNumber.trim() !== '' &&
               clientEmail.trim() !== '' &&
               clientInstagram.trim() !== '' &&
               clientFacebook.trim() !== '';
    };

    const handleSubmit = () => {
        const isValid = validateFormFields();
        if (isValid) {
            onSubmit({clientName: clientName, phoneNumber: clientPhoneNumber, email: clientEmail, instagram: clientInstagram, facebook: clientFacebook});
        } else {
            alert("Please complete all required fields.");
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

    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-xl font-bold mb-4">Informații client</h2>

            {/* Service selection */}
            <div className="mb-2">
                <FormDropdownComponent label='Alege serviciul oferit' options={options}/>
            </div>

            {/* Client Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FormTextInput
                    label="Denumire client"
                    type="text"
                    value={clientName}
                    edit={true}
                    onChange={handleClientNameChange}
                />
                <FormTextInput
                    label="Telefon"
                    type="phone"
                    value={clientPhoneNumber}
                    edit={true}
                    onChange={handleClientPhoneNumberChange}
                />
                <FormTextInput
                    label="E-mail"
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

export default NewClientForm;
