'use client';

import React, { useState, useCallback } from 'react';
import FormTextInput from '../FormTextInput';
import FormButton from "@/components/FormButton";
import {signIn} from "next-auth/react";
import { useRouter } from 'next/navigation';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl: "/"
        });

        if (result?.ok) {
            router.push("/"); // Redirecționează către homepage
        } else {
            alert("Email sau parolă incorectă");
        }
    };

    return (
        <form className="w-full rounded pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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
                <FormButton label={'Continua'} onClick={() => {}}/>
            </div>
        </form>
);
};

export default LoginForm;
