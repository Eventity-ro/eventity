'use client'

import React, {useEffect, useState} from 'react';
import AppButton from "@/components/buttons/AppButton";
import ProfileButton from "@/components/buttons/ProfileButton";
import SearchBar from '@/components/search-bars/SearchBar';
import logo from "@/images/logo.svg"
import Image from "next/image";
import {usePathname, useRouter} from 'next/navigation'
import Link from 'next/link';
import MobileSearchBar from "@/components/search-bars/MobileSearchBar";
import AdminHeader from "@/components/headers/AdminHeader";
import { IoMenuSharp } from "react-icons/io5";
import MobileMenu from "@/components/menu/MobileMenu";

export default function Header() {
    const router = useRouter();
    const pathName = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    // Capture ESC dacă vrei, altfel poți elimina
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    if(pathName.includes('admin')) {
        return <AdminHeader/>;
    }
    return (
        <div
            className="w-full border-b-gray-300 border-b"
        >
                <div className="md:hidden flex flex-col pt-4 pb-7 w-full items-center gap-y-4 px-4">
                    <div className="flex flex-row justify-between items-center w-full">
                        <Link href="/">
                            <Image src={logo} alt="logo" width={150} height={100}/>
                        </Link>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="bg-white rounded-full p-2 shadow-lg flex-shrink-0"
                            aria-label="Open menu"
                        >
                            <IoMenuSharp size={30}/>
                        </button>
                    </div>

                    <MobileSearchBar/>

                    {isOpen && <MobileMenu onClose={() => setIsOpen(false)}/>}
                </div>

            <div className="hidden md:flex flex-row justify-between items-center gap-4 pt-7 pb-4 px-12">
                    <Link href="/"  className="flex-shrink-0">
                        <Image src={logo} alt="logo" width={150} height={100}/>
                    </Link>

                    <SearchBar/>

                    <div className="flex items-center gap-2">
                        <div className="w-[150px]">
                            <AppButton title="Devino client" onClick={() => router.push('/become-client')}/>
                        </div>
                        <ProfileButton/>
                    </div>
                </div>
        </div>
    );
}
