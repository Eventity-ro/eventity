'use client'

import React, {useCallback, useEffect, useState} from 'react';
import Calendar from '@/components/AdminMonthCalendar';
import EventsDetailsPanel from '@/components/EventsDetailsPanel';
import FormDropdownComponent from "@/components/FormDropdownComponent";
import useSWR from "swr";
import {EventRecord} from "@/types/Event";
import {addMonths} from 'date-fns';
import Service from "@/types/Service";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface CalendarPageProps {
    adminId: number;
    adminServices: Service[];
}

function CalendarPage({adminId, adminServices}: CalendarPageProps) {
    const {data: events, error, mutate} = useSWR<EventRecord[]>(
        `/api/events?adminId=${adminId}`,
        fetcher
    );

    const [selectedEvents, setSelectedEvents] = useState<EventRecord[]>(); // State for the selected event
    const [eventsPanelOpen, setEventsPanelOpen] = useState(false); // State for the side panel visibility

    // Function to open the side panel with event account-details
    const openSidePanel = (events: EventRecord[]) => {
        setSelectedEvents(events);
        setEventsPanelOpen(true);
    };

    // Function to close the side panel
    const closeSidePanel = () => {
        setSelectedEvents([])
        setEventsPanelOpen(false);
    };

    const handleDateCellClicked = (events: EventRecord[]) => {
        if (events.length > 0) {
            openSidePanel(events);
        }
        else {
            closeSidePanel();
        }
    }

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
            <div className={`relative ${selectedEvents && selectedEvents.length > 0 ? 'max-w-6xl' : 'max-w-3xl'} mx-auto p-5 gap-4 flex`}>
                <div className="flex flex-col gap-6 flex-1">
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
                            onEventClick={handleDateCellClicked}
                        />
                    </div>
                    <div>
                        <div className="text-center mb-4 flex justify-between">
                            <h2 className="text-2xl font-bold">
                                {addMonths(calendarMonth, 1).toLocaleString('ro-RO', {month: 'long', year: 'numeric'})}
                            </h2>
                        </div>
                        <Calendar
                            calendarMonth={addMonths(calendarMonth, 1)}
                            events={events}
                            onEventClick={handleDateCellClicked}
                        />
                    </div>
                </div>

                {eventsPanelOpen && selectedEvents && (
                    <EventsDetailsPanel
                        selectedEvents={selectedEvents}
                        adminServices={adminServices}
                        allEvents={events}
                        refreshOnUpdate={mutate}
                    />
                )}
            </div>
        );
    }
}

export default CalendarPage;
