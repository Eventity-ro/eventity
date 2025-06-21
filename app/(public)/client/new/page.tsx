'use client';

import React from "react";
import NewAdminForm from "@/components/forms/NewAdminForm";

const NewClient = () => {

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex pt-10 max-w-5xl flex-col items-center">
                <NewAdminForm onSubmit={() => alert("Aici")} onSubmitButtonText="Inregistreaza-te"/>
            </div>
        </div>
    );
};

export default NewClient;
