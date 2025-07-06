'use client';

import React, {ChangeEvent} from 'react';

interface FormDropdownProps {
    options: any[];
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FormDropdownComponent: React.FC<FormDropdownProps> = ({ options, value, onChange }) => {
    return (
        <select
            id="service"
            name="service"
            className="w-full h-12 py-2 px-2 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
            value={value}
            onChange={onChange}
        >
            {options.map(
                (option, index) => <option key={option?.id || index} value={option?.name || option}>{option?.name || option}</option>
            )}
        </select>
    );
};

export default FormDropdownComponent;
