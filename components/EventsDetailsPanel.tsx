import React from 'react';
import {EventRecord} from "@/types/Event";
import Service from "@/types/Service";
import EventDetails from "@/components/forms/EventDetails";
import {KeyedMutator} from "swr";

interface EventsDetailsPanelProps {
    selectedEvents: EventRecord[];
    adminServices: Service[];
    allEvents: EventRecord[];
    refreshOnUpdate: KeyedMutator<EventRecord[]>
;}

const EventsDetailsPanel: React.FC<EventsDetailsPanelProps> = ({ selectedEvents, adminServices, allEvents, refreshOnUpdate }) => {
    const [eventPanelOpen, setEventPanelOpen] = React.useState(false);
    const [selectedEvent, setSelectedEvent] = React.useState<EventRecord>()

    /**
     * Returns a Partial<T> containing only the keys whose values in `edited`
     * differ from those in `original`.
     */
    function getEditedFields<T extends EventRecord>(
        original: T,
        edited: T
    ): Partial<T> {
        const diff: Partial<T> = {};

        // Iterate only the keys present on `edited`
        (Object.keys(edited) as (keyof T)[]).forEach((key) => {
            const origVal = original[key];
            const editedVal = edited[key];

            if (origVal !== editedVal) {
                diff[key] = editedVal;
            }
        });

        return diff;
    }

    const handleEventEdit = async (changedEvent: EventRecord) => {
        try {
            if (selectedEvent) {
                const editedFields = getEditedFields(selectedEvent, changedEvent)

                const res = await fetch(`/api/events/${selectedEvent.id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(editedFields)
                });

                if (!res.ok) {
                    console.log('Failed to edit event');
                } else {
                    await refreshOnUpdate();
                }
            }
        } catch (err) {
            console.log('Error editing event', err);
        }
    }

    const handleEventCardClicked = (event: EventRecord) => {
        setSelectedEvent(event);
        setEventPanelOpen(true);
    }

    React.useEffect(() => {
        setEventPanelOpen(false)
    }, [selectedEvents])

    const unavailableDates = () => {
        if (selectedEvent) {
            const allEventsByService = allEvents.filter(eventValue => eventValue.service_id == selectedEvent.service_id)
            return allEventsByService.map(eventByService => eventByService.date)
        }
        else {
            return []
        }
    }

    const eventsPanel = () => {
        return (
            <div className="w-72 flex flex-col ml-4">
                {/* Panel header */}
                <div className="text-2xl font-bold text-left mb-4">
                    Evenimente
                </div>

                <div className="text-[#979EAB] mb-4">
                    {new Date(selectedEvents[0].date).toLocaleDateString('ro-Ro', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </div>

                {/* Panel body */}
                <div className="flex-1 flex flex-col gap-2">
                    {selectedEvents.map(event => (
                        <div
                            key={event.id}
                            className="flex items-center h-11 p-2 border border-[#979EAB] rounded cursor-pointer"
                            onClick={() => handleEventCardClicked(event)}
                        >
                        <span
                            className="w-7 h-1.5 rounded mr-1.5 flex-shrink-0"
                            style={{backgroundColor: 'red'}}
                        />
                            <span className="text-sm">{event.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        (eventPanelOpen && selectedEvent) ?
            <EventDetails
                selectedEvent={selectedEvent}
                adminServices={adminServices}
                unavailableDates={unavailableDates()}
                closePanel={() => setEventPanelOpen(false)}
                handleEventEdit={handleEventEdit}
            /> :
            eventsPanel()
    );
};

export default EventsDetailsPanel;
