'use client';

import React from 'react';

interface FormDropdownProps {
    label: string;
    options: string[];
}

const FormDropdownComponent: React.FC<FormDropdownProps> = ({ label, options}) => {
    return (
        <select
            id="service"
            name="service"
            className="w-full h-12 py-2 px-2 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
        >
            <option value="" disabled hidden>{label}</option>
            {options.map(
                (option, index) => <option key={index} value={option}>{option}</option>
            )}
        </select>
    );
};

export default FormDropdownComponent;
