import React from 'react';
import Link from 'next/link';

interface DashboardCardProps {
    date: string;
    name: string;
    id: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ date, name, id }) => {
    const formattedDate = new Date(date).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const currentDate = new Date();
    const eventDate = new Date(date);
    const timeDifference = eventDate.valueOf() - currentDate.valueOf();

    // Convert milliseconds to days and use Math.ceil to avoid fractional days
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold">{formattedDate}</div>
            <div className="text-lg font-bold mt-2">{name}</div>
            <div className="text-gray-500 text-sm mt-1">peste {daysDifference} zile</div>
            <Link
                href={{pathname: '/admin/event', query: {date: date.toString(), names: name}}}
                className="text-black font-bold mt-4 inline-flex items-center"
            >
                <span className='underline'>Vezi mai multe detalii</span> <span className="ml-1">&gt;</span>
            </Link>
        </div>
    );
};

export default DashboardCard;
