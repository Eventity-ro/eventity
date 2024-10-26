'use client';

import React, { useState, useCallback } from 'react';
import FormTextInput from '../FormTextInput';
import FormButton from "@/components/FormButton";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form className="rounded pt-6 pb-8 mb-4 bg-white" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <p className="mb-2 text-neutral-700 text-2xl font-semibold">Intra in cont</p>
                <FormTextInput
                    label="E-mail"
                    type="email"
                    value={email}
                    edit={true}
                    onChange={handleEmailChange}
                />
                <FormTextInput
                    label="Parolă"
                    type="password"
                    value={password}
                    edit={true}
                    onChange={handlePasswordChange}
                />
                <FormButton label={'Continua'} onClick={() => console.log('Continua')}/>
            </div>
        </form>
);
};

export default LoginForm;
