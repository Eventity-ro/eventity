'use client';

import React, { useState, useCallback } from 'react';
import FormTextInput from '../FormTextInput';
import FormButton from "@/components/FormButton";
import Image from "next/image";
import logo from "@/images/logo.svg";

const AccountDetailsForm: React.FC = () => {
    const [firstName, setFirstName] = useState('Maria');
    const [lastName, setLastName] = useState('Popescu');
    const [email, setEmail] = useState('maria.popescu@gmail.com');
    const [edit, setEdit] = useState(false);

    const handleFirstNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }, []);

    const handleLastNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }, []);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form className="flex flex-col w-full rounded pt-6 pb-8 mb-4 gap-2" onSubmit={handleSubmit}>

            <div className="flex w-full h-20 items-center pb-10">
                <Image src={logo} alt="Profile image" className="h-20 w-20 rounded-full"/>
                <div className="flex flex-col pl-2">
                    <span>Maria Popescu</span>
                    <span className="text-gray-400 text-xs">Schimba imaginea de profil</span>
                </div>
            </div>

            <p className="mb-2 text-neutral-700 text-2xl font-semibold">Detalii cont</p>

                <FormTextInput
                    label="Prenume"
                    type="firstName"
                    onChange={handleFirstNameChange}
                    edit={edit}
                    value={firstName}
                />
                <FormTextInput
                    label="Nume"
                    type="lastName"
                    onChange={handleLastNameChange}
                    edit={edit}
                    value={lastName}
                />
                <FormTextInput
                    label="Email"
                    type="email"
                    onChange={handleEmailChange}
                    edit={edit}
                    value={email}
                />
                <FormButton label={edit ? 'Salveaza' : 'Modifica'} onClick={() => setEdit(!edit)}/>
        </form>
    );
};

export default AccountDetailsForm;
