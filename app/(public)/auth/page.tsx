"use client";

import React from 'react';
import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import {signIn} from "next-auth/react";

export default function Auth() {

    return (
        <div className="flex flex-col items-center">
            <div className="flex pt-10 max-w-5xl flex-col items-center px-4">
                <LoginForm/>

                <div className="text-center my-2 w-full">
                    <div className="flex w-full items-center my-2">
                        <div className="flex-grow border-t-2 border-t-gray-300"></div>
                        <span className="mx-4 text-gray-600">sau conecteaza-te cu</span>
                        <div className="flex-grow border-t-2 border-t-gray-300"></div>
                    </div>
                    <div className="flex justify-center space-x-10 mb-4">
                        <button onClick={() => signIn("facebook", {callbackUrl: "/"})}
                                className="text-gray-400 hover:text-gray-900">
                            <FaFacebook className="text-3xl"/>
                        </button>
                        <button onClick={() => signIn("google", {callbackUrl: "/"})}
                                className="text-gray-400 hover:text-gray-900">
                            <FaGoogle className="text-3xl"/>
                        </button>
                    </div>
                </div>

                <div className="flex items-center my-2 w-full">
                    <div className="flex-grow border-t-2 border-t-gray-300"></div>
                    <span className="mx-4 text-gray-600">Nu ai cont?</span>
                    <div className="flex-grow border-t-2 border-t-gray-300"></div>
                </div>

                <SignUpForm/>
            </div>
        </div>
    );
}
