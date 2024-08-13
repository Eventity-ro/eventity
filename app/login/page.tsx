'use client';

import React, { ChangeEvent } from 'react';
import LoginForm from "@/components/forms/LoginForm";

class Login extends React.Component {
    render() {
        return (
            <div className="flex justify-center items-center min-h-screen bg-white">
                <LoginForm />
            </div>
        );
    }
}

export default Login;
