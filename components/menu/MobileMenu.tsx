"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";
import AppButton from "@/components/buttons/AppButton";
import {router} from "next/client";
import {signOut, useSession} from "next-auth/react";
import {FiLogIn, FiLogOut} from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

interface MobileMenuProps {
    onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
    const panelRef = useRef<HTMLDivElement>(null);
    const { data: session, status } = useSession();

    // Close on Escape key
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-40 flex flex-grow md:hidden">
            {/* backdrop */}
            <div
                className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* panel */}
            <div
                ref={panelRef}
                className="flex flex-col relative bg-white ml-auto w-3/4 max-w-xs h-full p-6 pt-8 shadow-2xl overflow-y-auto transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="text-2xl font-bold mb-4">Bun venit!</div>
                {/* Client toggle */}
                <AppButton title="Devino client" onClick={() => router.push('/become-client')}/>

                {/* primary nav */}
                <nav className="flex flex-col gap-y-4 mt-10 text-gray-800 border-b-gray-400">
                    {session && (
                        <>
                            <Link href="/favorites" className="flex items-center gap-2">
                                <FaRegHeart />
                                Favorite
                            </Link>
                            <Link href="/account-details" className="flex items-center gap-2">
                                <IoSettingsOutline />
                                Setări profil
                            </Link>
                        </>
                    )}
                    <div className="text-gray-700">Despre noi</div>
                    <div className="text-gray-700">Termeni și condiții</div>
                </nav>


                <hr className="my-8"/>

                {/* secondary nav */}
                <nav className="flex flex-col gap-y-4 text-gray-800">
                    <Link href="/about">Despre noi</Link>
                    <Link href="/terms">Termeni și condiții</Link>
                </nav>

                <hr className="my-8" />

                {/* logout */}
                {session ?
                    <button
                        onClick={() => signOut({callbackUrl: "/"})}
                        className="flex items-center gap-2 hover:bg-gray-100 text-red-600"
                    >
                        <FiLogOut className="text-lg"/> Ieși din cont
                    </button> :
                    <Link
                        href="/auth"
                        onClick={onClose}
                        className="flex items-center gap-2 hover:bg-gray-100"
                    >
                        <FiLogIn className="text-lg"/> Intra in cont
                    </Link>
                }

                {/* footer */}
                <div className="mt-auto pb-8">
                        <Image src={logo} alt="eventity" className="h-[32px] w-1/2" />
                        <p className="text-sm text-gray-500">© 2024 Eventity</p>
                </div>
            </div>
        </div>
    );
}
