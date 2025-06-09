"use client";

import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {FiHeart, FiList, FiLogIn, FiLogOut, FiSettings} from "react-icons/fi";
import {useSession, signOut} from "next-auth/react";
import {IoIosMenu} from "react-icons/io";
import profile from "@/images/ProfileIcon.svg";
import Image from "next/image";

export default function ProfileButton() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { data: session, status } = useSession();

    const toggleMenu = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={toggleMenu}
                className="px-5 w-[114px] py-2 space-x-3 rounded-full border flex items-center justify-center hover:bg-gray-100">
                <IoIosMenu color="black" size="30"/>
                <Image src={profile} alt='profileIcon' width={45} height={45}/>
            </button>

            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-60 bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-200 z-50">
                    <div className="flex flex-col divide-y divide-gray-200 text-sm font-medium">
                        {session ? (
                            <>
                                <Link href="/favorites" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
                                    <FiHeart className="text-lg"/> Favorite
                                </Link>
                                <Link href="/account-details" className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100">
                                    <FiSettings className="text-lg"/> Setări profil
                                </Link>
                            </>
                        ) : null}
                        <div className="px-4 py-3 text-gray-700">Despre noi</div>
                        <div className="px-4 py-3 text-gray-700">Termeni și condiții</div>

                        {session ?
                            <button
                                onClick={() => signOut({callbackUrl: "/"})}
                                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 text-red-600"
                            >
                                <FiLogOut className="text-lg"/> Ieși din cont
                            </button> :
                            <Link
                                href="/auth"
                                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"
                            >
                                <FiLogIn className="text-lg"/> Intra in cont
                            </Link>
                        }
                    </div>
                </div>
            )}
        </div>
    );
}
