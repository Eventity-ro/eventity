'use client';

import React from 'react';

interface FormButtonProps {
    label: string;
    darkMode: boolean;
    onClick: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({ label, onClick, darkMode}) => {
    return (
        <button
            type="submit"
            className="w-full h-14 bg-transparent hover:bg-green-50 font-semibold py-2 px-4 border-2 rounded-md focus:outline-none focus:shadow-outline"
            style={{backgroundColor: darkMode ? '#5C8171' : "white", borderColor: '#5C8171', color : darkMode ? 'white' : '#5C8171'}}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default FormButton;
