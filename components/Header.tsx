'use client';

import React from 'react';
import AppButton from "@/components/buttons/AppButton";
import SearchBar from './SearchBar';
import ProfileButton from "@/components/buttons/ProfileButton";

export default function Header() {
    return (
        <div className="bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-[20%] pt-4 pb-2 px-4 lg:px-12">
                <span className="text-xl font-bold">Logo</span>
                <SearchBar/>
                <div className="flex items-center gap-2">
                    <AppButton title="Devino client"/>
                    <ProfileButton/>
                </div>
            </div>
            <hr/>
        </div>
    );
}
