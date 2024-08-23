import React from 'react';
import DashboardCard from '@/components/AdminDashCard';

export default function AdminDashboard() {

    const events = [
        {
            date: new Date(2024, 7, 25),
            names: 'Daniel si Maria',
        },
        {
            date: new Date(2024, 8, 19),
            names: 'Daniel si Maria',
        },
        {
            date: new Date(2024, 8, 21),
            names: 'Daniel si Maria',
        }
    ]
    return (
        <div className="p-5 max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold my-14">Bun venit înapoi, Restaurant Select</h1>

            <button className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5">
                Adaugă eveniment nou
            </button>

            <h2 className="text-xl font-semibold mb-5">Evenimente următoare</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {
                    events.map((card, index) => (
                        <DashboardCard key={index} date={card.date} names={card.names}/>
                    ))
                }
            </div>
        </div>
    );
}