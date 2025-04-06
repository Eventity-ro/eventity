'use client'

import React from 'react';
import AppButton from "@/components/buttons/AppButton";
import ProfileButton from "@/components/buttons/ProfileButton";
import SearchBar from '@/components/SearchBar';
import logo from "@/images/logo.svg"
import Image from "next/image";
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import MobileSearchBar from "@/components/MobileSearchBar";

export default function Header() {

    const pathName = usePathname()

    const adminPageTitle = (pageInRoute: boolean, pageName: string, pageUrl: string) => {
        return (
            <>
                {
                    pageInRoute ?
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-lg">{pageName}</span>
                            <div className="h-1 bg-black mt-1 rounded" style={{width: '50%'}}></div>
                        </div> :
                        <Link href={pageUrl} className='mt-0.5'>{pageName}</Link>
                }
            </>
        );
    };

    const adminHeader = () => {
        return (
            <div
                className="flex flex-row justify-between items-center gap-4 lg:gap-[20%] p-4 lg:px-12"
            >
                <Link href="/admin/dashboard">
                    <Image src={logo} alt="logo" width={100} height={100}/>
                </Link>
                <div className='flex gap-x-8'>
                    <div className='flex gap-x-8'>
                        {
                            adminPageTitle(pathName.includes('dashboard'), 'Recente', '/admin/dashboard')
                        }
                        {
                            adminPageTitle(pathName.includes('calendar'), 'Calendar', '/admin/calendar')
                        }
                        {
                            adminPageTitle(pathName.includes('services'), 'Serviciile mele', '/admin/services')
                        }
                    </div>
                </div>
                <ProfileButton/>
            </div>
        )
    }

const header = () => {
    return (
        <div
            className="w-full"
        >
            <div className="flex flex-col py-4 lg:hidden w-full items-center gap-2">
                <div className="flex flex-row justify-center items-center gap-4 w-full">
                    <Link href="/">
                        <Image src={logo} alt="logo" width={150} height={100}/>
                    </Link>
                    <MobileSearchBar/>
                </div>

                <div className="flex flex-row justify-center items-center gap-4 w-full">
                    <AppButton title="Devino client"/>
                    <ProfileButton/>
                </div>
            </div>

            <div className="hidden lg:flex flex-row justify-between items-center gap-[20%] pt-4 pb-2 px-12">
                <Link href="/">
                    <Image src={logo} alt="logo" width={150} height={100}/>
                </Link>

                <SearchBar/>

                <div className="flex items-center gap-2">
                    <AppButton title="Devino client"/>
                    <ProfileButton/>
                </div>
            </div>
        </div>
    )
}

    return (
        <div className='shadow-md'>
            {
                pathName.includes('admin') ?
                    adminHeader() :
                    header()
            }
            <hr/>
        </div>
    );
}
