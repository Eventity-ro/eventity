import React from 'react';
import AccountDetailsForm from "@/components/forms/AccountDetailsForm";

export default function Details() {

    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex pt-10 max-w-5xl flex-col items-center">
                <AccountDetailsForm/>
            </div>
        </div>
    );
}
