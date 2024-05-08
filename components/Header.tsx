import React from 'react';
import AppButton from "@/components/buttons/AppButton";
import SearchBar from './SearchBar';
import ProfileButton from "@/components/buttons/ProfileButton";
import FilterButton from "@/components/buttons/FilterButton";

export default function Header() {
    return (
        <div className="bg-white flex-col items-center">
            <div className="flex justify-between items-center gap-[20%] pt-4 pb-2 px-12">
                <span className="text-xl font-bold">Logo</span>
                <SearchBar/>
                <div className="flex items-center gap-2">
                    <AppButton title="Devino client"/>
                    <ProfileButton/>
                </div>
            </div>
            <hr/>
            <div className="flex items-center pb-4 pt-2 px-12">
                        <ul className="flex gap-4 items-center">
                            <li>
                                <AppButton title = "Toate"/>
                            </li>
                            <li>
                                <AppButton title = "Sală evenimente"/>
                            </li>
                            <li>
                                <AppButton title = "Muzică"/>
                            </li>
                            <li>
                                <AppButton title = "Foto"/>
                            </li>
                            <li>
                                <AppButton title = "Video"/>
                            </li>
                            <li>
                                <AppButton title = "Cocktail bar"/>
                            </li>
                        </ul>
                <div className="flex-1"/>
                <FilterButton/>
            </div>
        </div>
    );
}
