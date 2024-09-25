'use client';

import React from 'react';

interface FormButtonProps {
    label: string;
    onClick: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({ label, onClick }) => {
    return (
        <button
            type="submit"
            className="w-full h-14 bg-transparent hover:bg-green-50 text-green-600 font-semibold py-2 px-4 border border-green-600 rounded focus:outline-none focus:shadow-outline"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default FormButton;
