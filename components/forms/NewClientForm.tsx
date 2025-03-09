'use client';

import React, {useCallback, useState} from 'react';
import FormTextInput from "@/components/FormTextInput";
import FormDropdownComponent from "@/components/FormDropdownComponent";
import Link from "next/link";

const NewClientForm = () => {

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

    const sendDict = {
        name: clientName
    }

    const handleClientNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setClientName(e.target.value);
    }, []);

    const handleClientPhoneNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setClientName(e.target.value);
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
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Informații client</h2>

            {/* Service selection */}
            <div className="mb-2">
                <FormDropdownComponent label='Alege serviciul oferit' options={options}/>
            </div>

            {/* Client Information */}
            <div className="grid grid-cols-2 gap-2">
                {/* Client name */}
                <div>
                    <FormTextInput
                        label="Denumire client"
                        type="text"
                        value={clientName}
                        edit={true}
                        onChange={handleClientNameChange}
                    />
                </div>

                {/* Phone */}
                <div>
                    <FormTextInput
                        label="Telefon"
                        type="phone"
                        value={clientPhoneNumber}
                        edit={true}
                        onChange={handleClientPhoneNumberChange}
                    />
                </div>

                {/* Email */}
                <div>
                    <FormTextInput
                        label="E-mail"
                        type="email"
                        value={clientEmail}
                        edit={true}
                        onChange={handleClientEmailChange}
                    />
                </div>

                {/* Instagram */}
                <div>
                    <FormTextInput
                        label="Instagram"
                        type="text"
                        value={clientInstagram}
                        edit={true}
                        onChange={handleClientInstagramChange}
                    />
                </div>

                {/* Facebook */}
                <div className="col-span-2">
                    <FormTextInput
                        label="Facebook"
                        type="text"
                        value={clientFacebook}
                        edit={true}
                        onChange={handleClientFacebookChange}
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-end">
                <div className="w-1/2 pl-2">
                    {/*<FormButton label='Urmatorul pas' darkMode={true} onClick={() => console.log('Urmatorul pas')}/>*/}
                    <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={{pathname: "/admin/services/new/venue", query: sendDict}}>
                        Urmatorul Pas
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewClientForm;
