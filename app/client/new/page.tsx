'use client';

import React from "react";
import ClientProgressBar from "@/components/ClientProgressBar";
import NewClientForm from "@/components/forms/NewClientForm";

const NewClient = () => {

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex pt-10 w-1/3 flex-col items-center">
                <div className="pb-8">
                    <span className="text-5xl font-bold">Devino client în doar trei pași!</span>
                </div>
                <ClientProgressBar firstStepActioned={true} secondStepActioned={false} thirdStepActioned={false}/>
                <NewClientForm/>
            </div>
        </div>
    );
};

export default NewClient;
