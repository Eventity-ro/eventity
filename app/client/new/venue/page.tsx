'use client';

import React from "react";
import ClientProgressBar from "@/components/ClientProgressBar";
import NewVenueForm from "@/components/forms/NewVenueForm";

const NewVenue = () => {

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex pt-10 max-w-5xl flex-col items-center">
                <div className="pb-8">
                    <span className="text-5xl font-bold text-white">2</span>
                </div>
                <ClientProgressBar firstStepActioned={true} secondStepActioned={true} thirdStepActioned={false}/>
                <NewVenueForm/>
            </div>
        </div>
    );
};

export default NewVenue;
