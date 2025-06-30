"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.svg";
import ProfileButton from "@/components/buttons/ProfileButton";
import React from "react";
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

export default function AdminHeader() {

    const pathName = usePathname();

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
