'use client';

import dynamic from 'next/dynamic';
import React, { ChangeEvent } from 'react';

const FormTextInput = dynamic(() => import('../../components/FormTextInput'), { ssr: false });

interface LoginFormState {
    email: string;
    password: string;
}

class LoginForm extends React.Component<{}, LoginFormState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: e.target.value });
    };

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };

    render() {
        return (
            <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={this.handleSubmit}>
                <div className="mb-2 text-neutral-700 text-2xl font-semibold font-['Inter']">Intra in cont</div>
                <FormTextInput
                    label="E-mail"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <FormTextInput
                    label="Parolă"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Continuă
                </button>
            </form>
        );
    }
}

export default LoginForm;
