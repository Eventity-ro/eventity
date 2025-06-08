'use client'

import React, {useState} from 'react';
import Calendar, {Event} from '@/components/AdminMonthCalendar';
import EventDetailsPanel from '@/components/EventDetailsPanel';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@heroui/react";

function App() {

    const [selectedEvent, setSelectedEvent] = useState<Event>(); // State for the selected event
    const [isPanelOpen, setIsPanelOpen] = useState(false); // State for the side panel visibility

    // Function to open the side panel with event account-details
    const openSidePanel = (event: Event) => {
        setSelectedEvent(event);
        setIsPanelOpen(true);
    };

    // Function to close the side panel
    const closeSidePanel = () => {
        setIsPanelOpen(false);
    };

    const unavailableDates = [
        {
            eventName: 'Nuntă',
            startDate: new Date(2024, 8, 16),
            endDate: new Date(2024, 8, 17),
            location: {name: 'Cluj', color: '#FF5733'},
            reservationName: 'Christopher și Alina Pop',
            numberOfPeople: 340,
            deposit: 2800,
            details: 'Vor sa faca nunta in gradina, dar rezerva si sala in caz de ploaie',
        },
        {
            eventName: 'Nuntă2',
            startDate: new Date(2024, 8, 16),
            endDate: new Date(2024, 8, 17),
            location: {name: 'Cluj', color: '#9633ff'},
            reservationName: 'Ioana și Andrei Popescu',
            numberOfPeople: 100,
            deposit: 1000,
        },
        {
            eventName: 'Botez',
            startDate: new Date(2024, 8, 20),
            endDate: new Date(2024, 8, 21),
            location: {name: 'București', color: '#3498DB'},
            reservationName: 'Ioana și Andrei Popescu',
            numberOfPeople: 100,
            deposit: 1000,
        },
        {
            eventName: 'Botez2',
            startDate: new Date(2024, 8, 20),
            endDate: new Date(2024, 8, 21),
            location: {name: 'București', color: '#dbca34'},
            reservationName: 'Ioana și Andrei Popescu',
            numberOfPeople: 100,
            deposit: 1000,
        },
        {
            eventName: 'Botez3',
            startDate: new Date(2024, 8, 21),
            endDate: new Date(2024, 8, 21),
            location: {name: 'București', color: '#34dbbc'},
            reservationName: 'Ioana și Andrei Popescu',
            numberOfPeople: 100,
            deposit: 1000,
        },
        {
            eventName: 'Petrecere',
            startDate: new Date(2024, 8, 25),
            endDate: new Date(2024, 8, 25),
            location: {name: 'Timișoara', color: '#2ECC71'},
            reservationName: 'Ioana și Andrei Popescu',
            numberOfPeople: 100,
            deposit: 1000,
        },
    ];

    const monthIndex: { [key: string]: string } = {
        '0': 'Ianuarie',
        '1': 'Februarie',
        '2': 'Martie',
        '3': 'Aprilie',
        '4': 'Mai',
        '5': 'Iunie',
        '6': 'Iulie',
        '7': 'August',
        '8': 'Septembrie',
        '9': 'Octombrie',
        '10': 'Noiembrie',
        '11': 'Decembrie'
    }

    const now = new Date();

    const startOfCurrentMonth: Date = new Date(now.getFullYear(), now.getMonth(), 1);

    const startOfNextMonth: Date = new Date(now.getFullYear(), now.getMonth() + 1, 1);

    const [selectedMonthKeys, setSelectedMonthKeys] = React.useState<any>(new Set([startOfCurrentMonth.getMonth()]));

    const selectedMonthValue = React.useMemo(
        () => monthIndex[Array.from(selectedMonthKeys).join(", ")],
        [selectedMonthKeys]
    );

    const dateDropdown = () => {
        return (
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                    >
                        {selectedMonthValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Static Actions"
                    selectionMode="single"
                    selectedKeys={selectedMonthKeys}
                    onSelectionChange={setSelectedMonthKeys}
                >
                    <DropdownItem key="0">Ianuarie</DropdownItem>
                    <DropdownItem key="1">Februarie</DropdownItem>
                    <DropdownItem key="2">Martie</DropdownItem>
                    <DropdownItem key="3">Aprilie</DropdownItem>
                    <DropdownItem key="4">Mai</DropdownItem>
                    <DropdownItem key="5">Iunie</DropdownItem>
                    <DropdownItem key="6">Iulie</DropdownItem>
                    <DropdownItem key="7">August</DropdownItem>
                    <DropdownItem key="8">Septembrie</DropdownItem>
                    <DropdownItem key="9">Octombrie</DropdownItem>
                    <DropdownItem key="10">Noiembrie</DropdownItem>
                    <DropdownItem key="11">Decembrie</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }

    const [selectedYearKeys, setSelectedYearKeys] = React.useState<any>(new Set([startOfCurrentMonth.getFullYear()]));

    const selectedYearValue = React.useMemo(
        () => Array.from(selectedYearKeys).join(", "),
        [selectedYearKeys]
    );

    const yearDropdown = () => {
        return (
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                    >
                        {selectedYearValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Static Actions"
                    selectionMode="single"
                    selectedKeys={selectedYearKeys}
                    onSelectionChange={setSelectedYearKeys}
                >
                    <DropdownItem key="2024">2024</DropdownItem>
                    <DropdownItem key="2025">2025</DropdownItem>
                    <DropdownItem key="2026">2026</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }

    return (
        <div className="relative max-w-3xl mx-auto p-5">
            <div className="flex flex-col gap-6">
                <div>
                    <div className="text-center mb-4 flex justify-between">
                        <h2 className="text-2xl font-bold">{selectedMonthValue} {selectedYearValue}</h2>
                        <div className='flex gap-1'>
                            {dateDropdown()}
                            {yearDropdown()}
                        </div>
                    </div>
                    <Calendar
                        year={parseInt(selectedYearValue)}
                        month={parseInt(Array.from(selectedMonthKeys).join(", "))}
                        unavailableDates={unavailableDates}
                        onEventClick={openSidePanel}
                    />
                </div>
                <div>
                    <div className="text-center mb-4 flex justify-between">
                        <h2 className="text-2xl font-bold">{selectedMonthValue === 'Decembrie' ? 'Ianuarie' : monthIndex[(parseInt(Array.from(selectedMonthKeys).join(", ")) + 1).toString()]} {selectedMonthValue === 'Decembrie' ? parseInt(selectedYearValue) + 1 : selectedYearValue}</h2>
                    </div>
                    <Calendar
                        year={selectedMonthValue === 'Decembrie' ? parseInt(selectedYearValue) + 1 : parseInt(selectedYearValue)}
                        month={selectedMonthValue === 'Decembrie' ? 0 : parseInt(Array.from(selectedMonthKeys).join(", ")) + 1}
                        unavailableDates={unavailableDates}
                        onEventClick={openSidePanel}
                    />
                </div>
            </div>

            {isPanelOpen && selectedEvent && (
                <EventDetailsPanel selectedEvent={selectedEvent} closePanel={closeSidePanel}/>
            )}
        </div>
    );
}

export default App;
