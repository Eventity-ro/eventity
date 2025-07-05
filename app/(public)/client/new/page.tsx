'use client';

import React from "react";
import NewServiceFormStep1 from "@/components/forms/NewServiceFormStep1";

const NewClient = () => {

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex pt-10 max-w-5xl flex-col items-center">
                <div className="pb-8">
                    <span className="text-4xl font-bold">Devino client</span>
                </div>
                    <div className="flex flex-col items-center">
                        <NewServiceFormStep1 onSubmit={() => alert("Data was submitted.")} onBack={() => alert("Back")} />
                    </div>
            </div>
        </div>
    );
};

export default NewClient;
