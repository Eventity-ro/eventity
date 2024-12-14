import React, {useState} from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay, isAfter, isBefore
} from 'date-fns';

interface Location {
    name: string;
    color: string;
}

export interface Event {
    eventName: string;
    startDate: Date;
    endDate: Date;
    location: Location;
    reservationName: string;
    numberOfPeople: number;
    deposit: number;
    details?: string;
    index?: number;
}

interface CalendarProps {
    year: number;
    month: number; // 0-indexed, January is 0, December is 11
    unavailableDates: Event[]; // Array of events, each with start date and end date
    onEventClick: (event: Event) => void; // New prop to handle event click
}

const MonthCalendar: React.FC<CalendarProps> = ({year, month, unavailableDates,onEventClick}) => {
    const monthStart = startOfMonth(new Date(year, month));
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, {weekStartsOn: 1}); // Week starts on Monday
    const endDate = endOfWeek(monthEnd, {weekStartsOn: 1});

    const days = eachDayOfInterval({start: startDate, end: endDate});

    const calculateEventsByDay = (days: Date[]) => {

    }

    // Function to check if a date is within an event's range
    const isDateInRange = (date: Date, event: Event) => {
        return (
            isSameDay(date, event.startDate) ||
            isSameDay(date, event.endDate) ||
            (isAfter(date, event.startDate) && isBefore(date, event.endDate))
        );
    };

    // Function to get all events for a particular date
    const getEventsForDate = (date: Date): {
        event: Event;
        isStart: boolean;
        isEnd: boolean;
        isSingleDay: boolean
    }[] => {
        return unavailableDates
            .filter(event => isDateInRange(date, event))
            .map(event => {
                const isSingleDay = isSameDay(event.startDate, event.endDate);
                const isStart = isSameDay(date, event.startDate);
                const isEnd = isSameDay(date, event.endDate);
                return {
                    event,
                    isStart,
                    isEnd,
                    isSingleDay,
                };
            });
    };

    // Function to render the event bars for multiple events on a single day
    const renderEventBars = (events: { event: Event; isStart: boolean; isEnd: boolean; isSingleDay: boolean }[]) => {
        return events.map((eventInfo, index) => {
            const {event, isStart, isEnd, isSingleDay} = eventInfo;
            let positionClasses = '';
            let borderRadius = '';

            if (isSingleDay) {
                positionClasses = 'left-3 -right-3';
                borderRadius = '15px';
            } else if (isStart) {
                positionClasses = 'left-3 -right-1';
                borderRadius = '15px 0 0 15px';
            } else if (isEnd) {
                positionClasses = '-left-1 -right-3';
                borderRadius = '0 15px 15px 0';
            } else {
                positionClasses = 'left-0 right-0';
                borderRadius = '0';
            }

            return (
                <div
                    key={index}
                    className={`absolute ${positionClasses} h-5 px-2 py-0.5 z-10`}
                    style={{
                        backgroundColor: event.location.color,
                        borderRadius: borderRadius,
                        bottom: index == 2 ? '3.5rem' : index == 1 ? '2rem' : '0.5rem',
                        cursor: 'pointer'
                    }}
                    onClick={() => onEventClick(event)}
                >
                    <div className="text-white text-xs">
                        {isStart ? `${event.eventName}` : '\u00A0'}
                    </div>
                </div>
            );
        });
    };

    // Function to render the square itself
    const renderSquare = (
        day: Date,
        hasEvents: boolean,
        events: { event: Event; isStart: boolean; isEnd: boolean; isSingleDay: boolean }[]
    ) => {
        return (
            <div
                key={day.toString()}
                className={`relative px-3 py-1 text-left border ${
                    hasEvents
                        ? 'bg-[#D4D4D4]'
                        : ''
                }`}
                style={{height: '6.5rem'}}
            >
                <div
                    className={
                        !isSameMonth(day, startOfMonth(new Date(year, month)))
                            ? 'text-white'
                            : hasEvents
                                ? ' text-red-500 line-through text-sm'
                                : 'text-sm'
                    }
                >
                    {format(day, 'd')}
                </div>
                {renderEventBars(events)}
            </div>
        );
    };

    // Function to render a single day square
    const renderDaySquare = (day: Date) => {
        const events = getEventsForDate(day);
        const hasEvents = events.length > 0;

        return renderSquare(day, hasEvents, events);
    };

    return (
        <div className="">

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

