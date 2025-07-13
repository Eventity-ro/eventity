'use client'

import React, {useCallback, useEffect, useState} from 'react';
import Calendar from '@/components/AdminMonthCalendar';
import EventsDetailsPanel from '@/components/EventsDetailsPanel';
import FormDropdownComponent from "@/components/FormDropdownComponent";
import useSWR from "swr";
import {EventRecord} from "@/types/Event";
import {addMonths} from 'date-fns';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface CalendarPageProps {
    adminId: number;
}

function CalendarPage({adminId}: CalendarPageProps) {

    const {data: events, error, mutate} = useSWR<EventRecord[]>(
        `/api/events?adminId=${adminId}`,
        fetcher
    );

    const [selectedEvents, setSelectedEvents] = useState<EventRecord[]>(); // State for the selected event
    const [isPanelOpen, setIsPanelOpen] = useState(false); // State for the side panel visibility

    // Function to open the side panel with event account-details
    const openSidePanel = (events: EventRecord[]) => {
        setSelectedEvents(events);
        setIsPanelOpen(true);
    };

    // Function to close the side panel
    const closeSidePanel = () => {
        setIsPanelOpen(false);
    };

    const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth())
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

    const handleMonthChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(Number(e.target.selectedIndex));
    }, []);

    const handleYearChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(Number(e.target.value));
    }, []);

    const [calendarMonth, setCalendarMonth] = useState<Date>(new Date(selectedYear, selectedMonth))

    useEffect(() => {
        setCalendarMonth(new Date(selectedYear, selectedMonth));
    }, [selectedMonth, selectedYear])

    if (events) {
        return (
            <div className="relative max-w-3xl mx-auto p-5">
                <div className="flex flex-col gap-6">
                    <div>
                        <div className="text-center mb-4 flex justify-between">
                            <h2 className="text-2xl font-bold">
                                {calendarMonth.toLocaleString('ro-RO', {month: 'long', year: 'numeric'})}
                            </h2>
                            <div className='flex gap-1'>
                                <FormDropdownComponent
                                    options={['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie']}
                                    value={calendarMonth.toLocaleString('ro-RO', {month: 'long'})}
                                    onChange={handleMonthChange}
                                />
                                <FormDropdownComponent
                                    options={[2024, 2025, 2026]}
                                    value={String(selectedYear)}
                                    onChange={handleYearChange}
                                />
                            </div>
                        </div>
                        <Calendar
                            calendarMonth={calendarMonth}
                            events={events}
                            onEventClick={openSidePanel}
                        />
                    </div>
                    <div>
                        <div className="text-center mb-4 flex justify-between">
                            <h2 className="text-2xl font-bold">
                                {addMonths(calendarMonth, 1).toLocaleString('ro-RO', {month: 'long'})}
                            </h2>
                        </div>
                        <Calendar
                            calendarMonth={addMonths(calendarMonth, 1)}
                            events={events}
                            onEventClick={openSidePanel}
                        />
                    </div>
                </div>

                {isPanelOpen && selectedEvents && (
                    <EventsDetailsPanel selectedEvents={selectedEvents} closePanel={closeSidePanel}/>
                )}
            </div>
        );
    }
}

export default CalendarPage;
