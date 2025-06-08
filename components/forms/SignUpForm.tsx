'use client';

import React, { useState, useCallback } from 'react';
import FormTextInput from '../FormTextInput';
import FormButton from "@/components/FormButton";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";

const SignUpForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const router = useRouter();

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }, []);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }, []);

    const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }, []);

    const handlePassword2Change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(e.target.value);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== password2) {
            alert("Parolele nu se potrivesc.");
            return;
        }

        const res = await fetch("api/auth/register", {
            method: "POST",
            body: JSON.stringify({name, email, password}),
            headers: {"Content-Type": "application/json"},
        });

        if (res.ok) {
            // Auto login after signup
            const result = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (result?.ok) {
                router.push("/"); // Or wherever you want
            }
        } else {
            const data = await res.json();
            alert(data.error || "Eroare la înregistrare");
        }
    };

    return (
        <form className="rounded pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <div className="mb-2 text-neutral-700 text-2xl font-semibold">Creeaza un cont nou</div>
                <FormTextInput
                    label="Nume Prenume"
                    type="name"
                    value={name}
                    onChange={handleNameChange}
                />
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
                <FormButton label={'Creeaza cont'} onClick={() => {}}/>
            </div>
        </form>
);
};

export default SignUpForm;
