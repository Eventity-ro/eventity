'use client';

import React, { ChangeEvent } from 'react';

interface FormTextInputProps {
    label: string;
    type: string;
    value: string | number;
    edit?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FormTextInput: React.FC<FormTextInputProps> = ({ label, type, value, onChange, edit = true }) => {
    return (
        <div className="w-full h-16 px-2 py-1 bg-white rounded-lg border border-neutral-300 flex-col justify-center">
            <div className="self-stretch h-9 pr-16 flex-col justify-start items-start flex-1">
                <label className="text-gray-400 text-xs font-normal">{label}</label>
                <input
                    className="w-full text-neutral-700 text-base border-0 font-medium focus:outline-none"
                    type={type}
                    value={value}
                    readOnly={!edit}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default FormTextInput;
