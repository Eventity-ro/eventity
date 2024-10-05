'use client';

import React, {useCallback, useState} from 'react';
import FormTextInput from "@/components/FormTextInput";

const NewClientForm = () => {

    const [clientName, setClientName] = useState('Restaurant Venus');
    const [clientPhoneNumber, setClientPhoneNumber] = useState('0755123456');
    const [clientEmail, setClientEmail] = useState('venus@contact.com');
    const [clientInstagram, setClientInstagram] = useState('@restaurantvenus');
    const [clientFacebook, setClientFacebook] = useState('restaurantvenus');

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
                <select
                    id="service"
                    name="service"
                    className="w-full h-12 py-2 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="" disabled selected hidden>
                        Alege serviciul oferit
                    </option>
                    <option>Sala nunti</option>
                    <option>Formatie</option>
                    <option>Catering</option>
                </select>
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
            <div className="mt-6">
                <div className="w-1/2"/>
                <button
                    type="button"
                    className="w-1/2 h-12 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    style={{backgroundColor: '#5C8171'}}
                >
                    Următorul pas
                </button>
            </div>
        </div>
    );
};

export default NewClientForm;
