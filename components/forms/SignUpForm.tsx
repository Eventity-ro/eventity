'use client';

import React, { useState, useCallback } from 'react';
import FormTextInput from '../FormTextInput';
import FormButton from "@/components/FormButton";

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handlePassword2Change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <form className="bg-white rounded pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <div className="mb-2 text-neutral-700 text-2xl font-semibold">Creeaza un cont nou</div>
                <FormTextInput
                    label="E-mail"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <FormTextInput
                    label="Parolă"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <FormTextInput
                    label="Repeta parola"
                    type="password"
                    value={password2}
                    onChange={handlePassword2Change}
                />
                <FormButton label={'Creeaza cont'} onClick={() => console.log('Creeaza cont')}/>
            </div>
        </form>
);
};

export default SignUpForm;
