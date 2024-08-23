import React from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay
} from 'date-fns';

interface CalendarProps {
    year: number;
    month: number; // 0-indexed, January is 0, December is 11
    unavailableDates: Record<string, Date[]>;
}

const MonthCalendar: React.FC<CalendarProps> = ({ year, month, unavailableDates  }) => {
    const monthStart = startOfMonth(new Date(year, month));
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 }); // Week starts on Monday
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });

    const days = eachDayOfInterval({ start: startDate, end: endDate });

    // Function to generate random colors
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Function to check if a date has an event
    const getEventForDate = (date: Date): { eventName: string, isStart: boolean, isEnd: boolean, isSingleDay: boolean } | null => {
        for (const [eventName, eventDates] of Object.entries(unavailableDates)) {
            const startEvent = eventDates[0];
            const endEvent = eventDates[eventDates.length - 1];

            const isSingleDay = eventDates.length === 1 && isSameDay(date, startEvent);

            if (isSingleDay) {
                return { eventName, isStart: true, isEnd: true, isSingleDay: true };
            }
            if (isSameDay(date, startEvent)) {
                return { eventName, isStart: true, isEnd: false, isSingleDay: false };
            }
            if (isSameDay(date, endEvent)) {
                return { eventName, isStart: false, isEnd: true, isSingleDay: false };
            }
            if (eventDates.some(eventDate => isSameDay(eventDate, date))) {
                return { eventName, isStart: false, isEnd: false, isSingleDay: false };
            }
        }
        return null;
    };

    // Function to render the event bar
    const renderEventBar = (eventInfo: { eventName: string, isStart: boolean, isEnd: boolean, isSingleDay: boolean } | null) => {
        if (!eventInfo) return null;

        let positionClasses = '';
        let borderRadius = '';

        if (eventInfo.isSingleDay) {
            positionClasses = 'left-3 -right-3';
            borderRadius = '15px';
        } else if (eventInfo.isStart) {
            positionClasses = 'left-3 -right-1';
            borderRadius = '15px 0 0 15px';
        } else if (eventInfo.isEnd) {
            positionClasses = '-left-1 -right-3';
            borderRadius = '0 15px 15px 0';
        } else {
            positionClasses = 'left-0 right-0';
            borderRadius = '0';
        }

        return (
            <div
                className={`absolute bottom-2 ${positionClasses} px-2 py-1 text-white text-xs z-10`}
                style={{
                    backgroundColor: eventInfo.eventName === 'Nuntă' ? '#808080' : '#ccc',
                    borderRadius: borderRadius,
                }}
            >
                {eventInfo.isStart ? eventInfo.eventName : '\u00A0'}
            </div>
        );
    };

    // Function to render the square itself
    const renderSquare = (day: Date, isUnavailableDate: boolean, eventInfo: { eventName: string, isStart: boolean, isEnd: boolean, isSingleDay: boolean } | null) => {
        return (
            <div
                key={day.toString()}
                className={`relative h-24 p-1 text-left border ${
                    !isSameMonth(day, startOfMonth(new Date(year, month)))
                        ? 'text-gray-400'
                        : isUnavailableDate
                            ? 'bg-[#D4D4D4] text-red-500 line-through'
                            : ''
                }`}
            >
                {format(day, 'd')}
                {renderEventBar(eventInfo)}
            </div>
        );
    };

    const renderDaySquare = (day: Date) => {
        const eventInfo = getEventForDate(day);
        const isUnavailableDate = !!eventInfo;

        return renderSquare(day, isUnavailableDate, eventInfo);
    };

    return (
        <div className="max-w-2xl mx-auto p-5">
            <div className="text-center mb-4">
                <h2 className="text-2xl font-bold">{format(monthStart, 'MMMM yyyy')}</h2>
            </div>
            <div className="grid grid-cols-7">
                {/* Render headers for days of the week */}
                {['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'].map((day, index) => (
                    <div key={index} className="text-center">
                        {day}
                    </div>
                ))}

                {/* Render the days in the calendar */}
                {days.map(day => renderDaySquare(day))}
            </div>
        </div>
    );
};

export default MonthCalendar;

