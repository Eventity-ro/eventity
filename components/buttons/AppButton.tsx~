import React from 'react';

interface AppButtonProps {
    title: string;
    onClick?: () => void;
}

export default function AppButton({ title, onClick }: AppButtonProps) {
    return (
        <button
            className="h-10 w-[150px] px-4 py-2 rounded-full border-[#5C8171] border-2 flex items-center justify-center hover:bg-gray-100"
            onClick={onClick}>
            <span className="text-center text-base text-[#5C8171]">{title}</span>
        </button>
    );
}
