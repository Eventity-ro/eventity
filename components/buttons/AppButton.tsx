import React from 'react';

export default function AppButton({ title }: { title: string }) {
    return (
        <button
            className="h-10 w-[150px] px-4 py-2 rounded-full border-[#5C8171] border-2 flex items-center justify-center hover:bg-gray-100">
            <span className="text-center text-base text-[#5C8171]">{title}</span>
        </button>
    );
}
