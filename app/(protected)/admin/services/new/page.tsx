'use client';

import React, { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import NewServiceFormStep1 from "@/components/forms/NewServiceFormStep1";
import NewServiceFormStep2 from "@/components/forms/NewServiceFormStep2";

const NewClient = () => {
    const [serviceDetails, setClientDetails] = useState({});
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex pt-10 max-w-5xl flex-col items-center">
                {currentStep == 1 &&
                    (<div className="pb-8">
                    <span className="text-4xl font-bold">Adauga serviciu nou!</span>
                </div>)}
                {currentStep == 1 && (
                    <div className="flex flex-col items-center">
                        <ProgressBar
                            currentStep={1}
                        />
                        <NewServiceFormStep1
                            onSubmit={(serviceDetails) => {
                                setClientDetails(serviceDetails);
                                setCurrentStep(2);
                            }}
                            onBack={()=>console.log('Inapoi')}
                        />
                    </div>
                )}

                {currentStep == 2 && (
                    <div className="flex flex-col items-center">
                        <ProgressBar
                            currentStep={2}
                        />
                        <NewServiceFormStep2
                            onBack={() => {
                                setCurrentStep(1);
                            }}
                            onSubmit={() => {
                                alert("Final");
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewClient;
