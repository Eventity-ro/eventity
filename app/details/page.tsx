import React from 'react';
import AccountDetailsForm from "@/components/forms/AccountDetailsForm";
import logo from "@/public/logo.png"
import Image from "next/image";

export default function Details() {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="w-1/3 pt-12">
                <div className="flex w-full h-20 items-center pb-10">
                    <Image src={logo} alt="Profile image" className="h-20 w-20 rounded-full"/>
                    <div className="flex flex-col pl-2">
                        <span>Maria Popescu</span>
                        <span className="text-gray-400 text-xs">Schimba imaginea de profil</span>
                    </div>
                </div>
                <AccountDetailsForm/>
            </div>
        </div>
    );
}
