'use client';

import React, {ChangeEvent} from 'react';

interface FormDropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FormDropdownComponent: React.FC<FormDropdownProps> = ({ label, options, value, onChange }) => {
    return (
        <select
            id="service"
            name="service"
            className="w-full h-12 py-2 px-2 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
            value={value}
            onChange={onChange}
        >
            <option value={label} disabled hidden>{label}</option>
            {options.map(
                (option, index) => <option key={index} value={option}>{option}</option>
            )}
        </select>
    );
};

export default FormDropdownComponent;
