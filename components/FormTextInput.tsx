'use client';

import React, { ChangeEvent } from 'react';

interface FormTextInputProps {
    label: string;
    type: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormTextInput: React.FC<FormTextInputProps> = ({ label, type, value, onChange }) => {
    return (
        <div className="w-full h-16 px-2 py-2 bg-white rounded-lg border border-neutral-300 flex-col justify-center mb-2">
            <div className="self-stretch h-9 pr-16 flex-col justify-start items-start flex-1">
                <label className="text-gray-400 text-xs font-normal font-['Inter']">{label}</label>
                <input
                    className="w-full text-neutral-700 text-base border-0 font-medium font-['Inter'] focus:outline-none"
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default FormTextInput;
