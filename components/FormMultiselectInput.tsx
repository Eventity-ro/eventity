'use client';

import React, { useState, useCallback } from 'react';


//Limita de 25 de caractere pentru un input
const FormMultiselectInput = () => {
    const [services, setServices] = useState<string[]>(['Ospătari', 'Parcare privată', 'Cocktail bar', 'Bucătărie proprie', 'Wi-Fi']);
    const [newService, setNewService] = useState<string>('');

    // Handle adding a new service
    const handleAddService = useCallback(() => {
        if (newService && !services.includes(newService)) {
            setServices([...services, newService]);
            setNewService('');  // Clear input field
        }
    }, [newService, services]);

    // Handle removing a service
    const handleRemoveService = (serviceToRemove: string) => {
        setServices(services.filter(service => service !== serviceToRemove));
    };

    return (
        <div className="w-full p-3 border border-gray-300 rounded-md flex flex-col">

            <label className="block text-sm mb-2 text-gray-400">Adaugă servicii</label>

            {/* Services container with border */}
            <div className="w-full flex flex-wrap gap-2 mb-3">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-gray-100 px-3 py-1 rounded-full border border-gray-200"
                    >
                        <span>{service}</span>
                        <button
                            onClick={() => handleRemoveService(service)}
                            className="ml-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>

            {/* Add new service input */}
            <div className="flex items-center border-t pt-3">
                <input
                    type="text"
                    value={newService}
                    onChange={(e) => setNewService(e.target.value)}
                    placeholder="Adaugă serviciu"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            handleAddService();
                        }
                    }}
                    className="w-1/2 px-3 py-2 border-none focus:outline-none sm:text-sm text-gray-500"
                />
                <button
                    onClick={handleAddService}
                    className="ml-2 px-3 py-2 text-white rounded-full flex items-center justify-center w-8 h-8"
                    style={{backgroundColor: '#5C8171'}}
                >
                    +
                </button>
            </div>


        </div>
    );
};

export default FormMultiselectInput;
