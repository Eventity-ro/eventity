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
import {EventRecord} from "@/types/Event";

interface CalendarProps {
    calendarMonth: Date;
    events: EventRecord[]; // Array of events, each with start date and end date
    onEventClick: (events: EventRecord[]) => void; // New prop to handle event click
}

const MonthCalendar: React.FC<CalendarProps> = ({calendarMonth, events, onEventClick}) => {
    const monthStart = startOfMonth(calendarMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, {weekStartsOn: 1}); // Week starts on Monday
    const endDate = endOfWeek(monthEnd, {weekStartsOn: 1});

    const days = eachDayOfInterval({start: startDate, end: endDate});

    // Get all events occurring on a given day
    const getEventsForDate = (day: Date) =>
        events.filter(ev => isSameDay(ev.date, day));

    // Render the little colored bars
    const renderEventBars = (dayEvents: EventRecord[]) => {
        if (dayEvents.length > 3 ) {
            return (
                <div
                    onClick={() => onEventClick(dayEvents)}
                    className={`absolute left-2 -right-5 h-5 px-3 py-0.5 z-10`}
                    style={{
                        backgroundColor: 'blue',
                        borderRadius: '15px',
                        top: '2.8rem',
                    }}
                >
                    <div className="text-white text-xs font-bold">
                        Mai multe
                    </div>
                </div>
            )
        } else {
            return dayEvents.map((ev, index) => (
                <div
                    key={index}
                    onClick={() => onEventClick(dayEvents)}
                    className={`absolute left-2 -right-5 h-5 px-3 py-0.5 z-10`}
                    style={{
                        backgroundColor: 'blue',
                        borderRadius: '15px',
                        top: index == 2 ? '' : index == 1 ? '1.4rem' : '2.8rem',
                    }}
                >
                    <div className="text-white text-xs font-bold">
                        {ev.name}
                    </div>
                </div>
            ));
        }
    }

    // Render one calendar square
    const renderDaySquare = (day: Date) => {
        const dayEvents = getEventsForDate(day);
        const isOtherMonth = !isSameMonth(day, monthStart);

        return (
            <div
                key={day.toString()}
                className={`relative cursor-pointer px-2 py-1 text-left border ${dayEvents.length > 0 && 'bg-[#D4D4D4]'}`}
                style={{height: '6.5rem'}}
                onClick={() => {
                    if (dayEvents.length == 0) onEventClick([])}
                }
            >
                {/* Only show the day number if it’s in this month */}
                {!isOtherMonth && (
                    <div
                        className={
                            `ml-2 ${dayEvents.length > 0 ? 'text-red-500 line-through' : 'text-[#979EAB]'}`
                        }
                    >
                        {format(day, 'd')}
                    </div>
                )}
                <div className="relative">{renderEventBars(dayEvents)}</div>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-7">
            {/* Render headers for days of the week */}
            {['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'].map((day, index) => (
                <div key={index} className="text-center text-[#979EAB]">
                    {day}
                </div>
            ))}

            {/* Render the days in the calendar */}
            {days.map(day => renderDaySquare(day))}
        </div>
    );
};

export default MonthCalendar;

