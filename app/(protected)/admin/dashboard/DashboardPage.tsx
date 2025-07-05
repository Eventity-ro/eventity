'use client'

import React from 'react';
import DashboardCard from '@/components/AdminDashCard';
import {useDisclosure} from "@heroui/react";
import NewEventModal from "@/components/modals/NewEventModal";
import {EventRecord} from "@/types/Event";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface AdminDashboardPageProps {
    adminId: number
;}

export default function AdminDashboard({adminId}: AdminDashboardPageProps) {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const { data: events, error, mutate } = useSWR<EventRecord[]>(
        `/api/events?adminId=${adminId}`,
        fetcher
    );

    const [isAdding, setIsAdding] = React.useState(false);

    const handleAddEvent = async (newEventData: EventRecord) => {
        setIsAdding(true);
        try {
            // Example payload; replace with real form data
            const newEvent = {
                name: newEventData.name,
                date: newEventData.date,
                serviceId: 1,
                type: newEventData.type,
                attendance: newEventData.attendance,
                deposit: newEventData.deposit,
                details: newEventData.details,
            };

            const res = await fetch('/api/events/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEvent),
            });

            if (!res.ok) {
                console.error('Failed to add event');
            } else {
                // Revalidate to get the updated list
                await mutate();
            }
        } catch (err) {
            console.error('Error adding event', err);
        } finally {
            setIsAdding(false);
        }
    };

    if (!events) return <p>Loading events…</p>;

    return (
        <div className="p-5 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold my-14">Bun venit înapoi, Restaurant Select</h1>

            <button className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" onClick={onOpen}>
                Adaugă eveniment nou
            </button>

            <NewEventModal isOpen={isOpen} onOpenChange={onOpenChange} onSubmit={handleAddEvent} />

            <h2 className="text-xl font-semibold mb-5">Evenimente următoare</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {
                    events.map((card, index) => (
                        <DashboardCard key={index} date={card.date} name={card.name} id={card.id}/>
                    ))
                }
            </div>
        </div>
    );
}