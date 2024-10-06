'use client';

import React, {ChangeEvent, useState} from 'react';

interface GeneralDescriptionProps {
    label: string;
    maxLength: number;
    textArea: string;
    setTextArea: (e: string) => void;
}

const FormTextAreaInput: React.FC<GeneralDescriptionProps> = ({ label, maxLength, textArea, setTextArea }) => {

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= maxLength) {
            setTextArea(e.target.value);
        }
    };

    return (
        <div className="w-full border border-gray-300 rounded-md p-3">
        <label className="block sm:text-sm text-gray-400">{label}
            <span className="text-sm font-normal">({textArea.length}/{maxLength})
            </span>
        </label>
    <textarea
    value={textArea}
    onChange={handleDescriptionChange}
    className="w-full h-20 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />

        {/* Validation message if needed */}
    {textArea.length === maxLength && (
        <p className="text-red-500 text-sm mt-1">Ați atins limita maximă de caractere!</p>
    )}
    </div>
);
};

export default FormTextAreaInput;
