import React from 'react';
import {IoFilterSharp} from "react-icons/io5";

export default function FilterButton() {
    return (
        <button
            className="h-10 px-4 py-2 space-x-2 rounded-full border flex items-center justify-center bg-green-800">
            <span className="text-center text-base text-white font-['Inter']">Filtre</span>
            <IoFilterSharp size={20} color="white"/>
        </button>
    );
}
