import React from 'react';
import AppButton from "@/components/buttons/AppButton";
import SearchBar from './SearchBar';
import ProfileButton from "@/components/buttons/ProfileButton";
import logo from "@/images/logo.svg"
import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-[20%] pt-4 pb-2 px-4 lg:px-12">
                <Image src={logo} alt="logo" width={100} height={100} />
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
