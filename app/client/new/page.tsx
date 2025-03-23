'use client';

import React from "react";
import NewClientForm from "@/components/forms/NewClientForm";

const NewClient = () => {

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex pt-10 max-w-5xl flex-col items-center">
                <div className="pb-8">
                    <span className="text-4xl font-bold">Devino client</span>
                </div>
                    <div className="flex flex-col items-center">
                        <NewClientForm onSubmit={() => alert("Data was submitted.")} onSubmitButtonText="Aplica"/>
                    </div>
            </div>
        </div>
    );
};

export default NewClient;
