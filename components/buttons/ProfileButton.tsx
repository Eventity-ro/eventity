import React from 'react';
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";


export default function ProfileButton() {
    return (
        <button
            className="p-2 space-x-2 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <IoIosMenu color="black" size="45"/>
            <MdAccountCircle color="green" size="45"/>
        </button>
    );
}
