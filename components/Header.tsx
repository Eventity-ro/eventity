'use client';

import React from 'react';
import AppButton from "@/components/buttons/AppButton";
import SearchBar from './SearchBar';
import ProfileButton from "@/components/buttons/ProfileButton";
import SearchBarMobile from "@/components/SearchBarMobile";

export default function Header() {
    return (
        <div className="bg-white">
            <div
                className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-[20%] pt-4 pb-2 px-4 lg:px-12">
                <div
                    className="w-12 h-12 p-2 bg-white rounded-full border border-neutral-300 lg:block hidden justify-center items-center">
                    <img src="logo.png" alt="Logo" className="w-full h-full object-cover rounded-full"/>
                </div>

                <div className="block lg:hidden">
                    <SearchBarMobile/>
                </div>
                <div className="hidden lg:block">
                    <SearchBar/>
                </div>
                <div className="hidden items-center gap-2 lg:flex">
                    <AppButton title="Devino client"/>
                    <ProfileButton/>
                </div>
            </div>
            <hr/>
        </div>
    );
}
