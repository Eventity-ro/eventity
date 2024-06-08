import React from 'react';
import AppButton from "@/components/buttons/AppButton";
import FilterButton from "@/components/buttons/FilterButton";

export default function Toolbar() {
    return (
        <div className="bg-white">
            <div className="flex flex-wrap justify-between items-center pb-4 pt-2 px-4 lg:px-12">
                <ul className="flex flex-wrap gap-2 lg:gap-4 items-center">
                    <li>
                        <AppButton title="Toate"/>
                    </li>
                    <li>
                        <AppButton title="Sală evenimente"/>
                    </li>
                    <li>
                        <AppButton title="Muzică"/>
                    </li>
                    <li>
                        <AppButton title="Foto"/>
                    </li>
                    <li>
                        <AppButton title="Video"/>
                    </li>
                    <li>
                        <AppButton title="Cocktail bar"/>
                    </li>
                    <li>
                        <AppButton title="Prajituri"/>
                    </li>
                    <li>
                        <AppButton title="Aranjamente florale"/>
                    </li>
                    <li>
                        <AppButton title="Botezuri"/>
                    </li>
                </ul>
                <div className="flex-1 lg:flex-none"/>
                <FilterButton/>
            </div>
        </div>
    );
}
