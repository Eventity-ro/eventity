import React from 'react';
import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/forms/SignUpForm";
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Auth() {

    return (
        <div className="flex flex-col min-h-screen"> {/* Make the container take the full height of the screen */}
            <header>
                <Header/>
            </header>
            <main className="flex-grow flex justify-center items-center bg-white"> {/* Use flex-grow to expand main content */}
                <div className="w-full max-w-md">
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
                            <button className="text-gray-600 hover:text-gray-900">
                                <FaFacebook/>
                            </button>
                            <button className="text-gray-600 hover:text-gray-900">
                                <FaGoogle/>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
