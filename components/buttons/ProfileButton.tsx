import React from 'react';
import { IoIosMenu } from "react-icons/io";
import profile from "@/images/ProfileIcon.svg"
import Image from "next/image";


export default function ProfileButton() {
    return (
        <button
            className="px-5  py-2 space-x-3 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <IoIosMenu color="black" size="30"/>
            <Image src={profile} alt='profileIcon' width={45} height={45}/>
        </button>
    );
}
