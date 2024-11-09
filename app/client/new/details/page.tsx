'use client';

import React from "react";
import ClientProgressBar from "@/components/ClientProgressBar";
import NewDetailsForm from "@/components/forms/NewDetailsForm";

const NewDetails = () => {

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex pt-10 w-1/3 flex-col items-center">
                <div className="pb-8">
                    <span className="text-5xl font-bold text-white">2</span>
                </div>
                <ClientProgressBar firstStepActioned={true} secondStepActioned={true} thirdStepActioned={true}/>
                <NewDetailsForm/>
            </div>
        </div>
    );
};

export default NewDetails;
