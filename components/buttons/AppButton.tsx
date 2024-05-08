import React from 'react';

export default function AppButton({ title }: { title: string }) {
    return (
        <button
            className="h-10 px-4 py-2 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <span className="text-center text-neutral-700 text-base font-black font-['Inter']">{title}</span>
        </button>
    );
}
