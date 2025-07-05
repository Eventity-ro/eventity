'use client';

import React, {ChangeEvent} from 'react';

interface FormDropdownProps {
    label: string;
    options: string[];
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FormDropdownComponent: React.FC<FormDropdownProps> = ({ label, options, onChange}) => {
    return (
        <select
            id="service"  
            name="service"
            onChange={onChange}
            className="w-full h-16 py-2 px-2 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
        >
            <option value={label} disabled>{label}</option>
            {options.map(
                (option, index) => <option key={index} value={option}>{option}</option>
            )}
        </select>
    );
};

export default FormDropdownComponent;
