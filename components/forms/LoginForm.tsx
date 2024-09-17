'use client';

import React, { useState, useCallback } from 'react';
import FormTextInput from '../FormTextInput';

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
        // Handle form submission here
    };

    return (
        <form className="bg-white rounded pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <p className="mb-2 text-neutral-700 text-2xl font-semibold font-['Inter']">Intra in cont</p>
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
            <button
                type="submit"
                className="w-full bg-transparent hover:bg-green-50 text-green-600 font-semibold py-2 px-4 border border-green-600 rounded focus:outline-none focus:shadow-outline"
            >
                Continuă
            </button>
        </form>
    );
};

export default LoginForm;
