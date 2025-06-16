'use client';

import React, { useState } from "react";
import ClientProgressBar from "@/components/ClientProgressBar";
import NewClientForm from "@/components/forms/NewClientForm";
import NewVenueForm from "@/components/forms/NewVenueForm";
import NewDetailsForm from "@/components/forms/NewDetailsForm";

const NewClient = () => {
    const [isNewClientFormOpen, setIsNewClientFormOpen] = useState(true);
    const [isNewVenueFormOpen, setIsNewVenueFormOpen] = useState(false);
    const [isNewDetailsFormFormOpen, setIsNewDetailsFormOpen] = useState(false);

    const [clientDetails, setClientDetails] = useState({});

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex pt-10 max-w-5xl flex-col items-center">
                {isNewClientFormOpen &&
                    (<div className="pb-8">
                    <span className="text-4xl font-bold">Adauga serviciu nou!</span>
                </div>)}
                {isNewClientFormOpen && (
                    <div className="flex flex-col items-center">
                        <ClientProgressBar
                            firstStepActioned={true}
                            secondStepActioned={false}
                            thirdStepActioned={false}
                        />
                        <NewClientForm
                            onSubmit={(clientDetails) => {
                                setClientDetails(clientDetails);
                                setIsNewClientFormOpen(false);
                                setIsNewVenueFormOpen(true);
                            }}
                        />
                    </div>
                )}

                {isNewVenueFormOpen && (
                    <div className="flex flex-col items-center">
                        <ClientProgressBar
                            firstStepActioned={true}
                            secondStepActioned={true}
                            thirdStepActioned={false}
                        />
                        <NewVenueForm
                            onBack={() => {
                                setIsNewVenueFormOpen(false);
                                setIsNewClientFormOpen(true);
                            }}
                            onSubmit={() => {
                                setIsNewVenueFormOpen(false);
                                setIsNewDetailsFormOpen(true);
                            }}
                        />
                    </div>
                )}

                {isNewDetailsFormFormOpen && (
                    <div className="flex flex-col items-center">
                        <ClientProgressBar
                            firstStepActioned={true}
                            secondStepActioned={true}
                            thirdStepActioned={true}
                        />
                        <NewDetailsForm
                            onBack={() => {
                                setIsNewDetailsFormOpen(false);
                                setIsNewVenueFormOpen(true);
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
