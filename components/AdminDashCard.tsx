import React from 'react';
import { format, differenceInDays } from 'date-fns';
import Link from 'next/link';

interface DashboardCardProps {
    date: Date;
    names: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ date, names }) => {
    const formattedDate = format(date, 'dd MMMM, yyyy');
    const daysLeft = differenceInDays(date, new Date());

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <div className="text-2xl font-bold">{formattedDate}</div>
            <div className="text-lg font-bold mt-2">{names}</div>
            <div className="text-gray-500 text-sm mt-1">peste {daysLeft} zile</div>
            <Link
                href={{pathname: '/admin/event', query: {date: date.toString(), names: names}}}
                className="text-black font-bold mt-4 inline-flex items-center"
            >
                <span className='underline'>Vezi mai multe detalii</span> <span className="ml-1">&gt;</span>
            </Link>
        </div>
    );
};

export default DashboardCard;
