'use client';

import React from 'react';
import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { FaFacebook, FaGoogle } from 'react-icons/fa';

export default function Auth() {

        return (
            <div className="flex justify-center items-center min-h-screen bg-white">
                <div className="w-full max-w-md">  {/* Adjusting the width of the container */}
                    <LoginForm/>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-600">Nu ai cont?</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <SignUpForm/>

                    <div className="text-center my-4">
                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-600">sau intră în cont cu</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className="flex justify-center space-x-4 mt-2">
                            {/* Replace these with actual icons or images */}
                            <button className="text-gray-600 hover:text-gray-900">
                                <FaFacebook/>
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                                <FaGoogle/>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        );
}
