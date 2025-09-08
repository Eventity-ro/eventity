import React, {useCallback} from 'react';
import {EventRecord} from "@/types/Event";
import FormTextInput from "@/components/FormTextInput";
import FormDropdownComponent from "@/components/FormDropdownComponent";
import Service from "@/types/Service";
import {Calendar, DateValue} from "@heroui/react";
import {parseDate} from "@internationalized/date";
import AppButton from "@/components/buttons/AppButton";
import {isSameDay} from 'date-fns';

interface EventDetailsProps {
    selectedEvent: EventRecord;
    adminServices: Service[];
    unavailableDates: string[];
    closePanel: () => void;
    handleEventEdit: (changedEvent: EventRecord) => Promise<void>;
}

const EventDetails: React.FC<EventDetailsProps> = ({
    selectedEvent,
    adminServices,
    unavailableDates,
    closePanel,
    handleEventEdit
}) => {
    const [serviceId, setServiceId] = React.useState<number>(0);
    const [serviceName, setServiceName] = React.useState<string>();
    const [name, setName] = React.useState<string>(selectedEvent.name);
    const [eventDate, setEventDate] = React.useState<string>(selectedEvent.date);
    const [type, setType] = React.useState<string>(selectedEvent.type);
    const [attendance, setAttendance] = React.useState<number>(selectedEvent.attendance ? selectedEvent.attendance : 0);
    const [deposit, setDeposit] = React.useState<number>(selectedEvent.deposit ? selectedEvent.deposit : 0);
    const [details, setDetails] = React.useState<string>(selectedEvent.details ? selectedEvent.details : '');

    const originalEventDate = React.useRef(eventDate)

    React.useEffect(() => {
        const adminServiceForEvent = adminServices.find(service => service.id == selectedEvent.service_id)

        if (adminServiceForEvent) {
            setServiceId(adminServiceForEvent.id);
            setServiceName(adminServiceForEvent.name)
        }
    }, [])

    const handleServiceIdChange = (newId: number) => {
        setServiceId(newId);
    };

    const handleServiceNameChange = (newName: string) => {
        setServiceName(newName);
    };

    const handleServiceChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        handleServiceNameChange(e.target.value);
        const selectedService = adminServices.find(service => service.name == e.target.value)
        if (selectedService) handleServiceIdChange(selectedService.id);
    }, []);

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }, []);

    const handleEventDateChange = useCallback((newEventDate: any) => {
        setEventDate(newEventDate.toString());
    }, []);

    const isDateUnavailable = (calendarDate: DateValue) => {
        return unavailableDates.some(dateString => {
            if (isSameDay(originalEventDate.current, calendarDate.toString())) return false
            else return isSameDay(dateString, calendarDate.toString());
        })
    }

    const handleTypeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setType(e.target.value);
    }, []);

    const handleAttendanceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setAttendance(Number(e.target.value));
    }, []);

    const handleDepositChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setDeposit(Number(e.target.value));
    }, []);

    const handleDetailsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails(e.target.value);
    }, []);

    const editedEvent = () : EventRecord => {
        return {
            id: selectedEvent.id,
            name: name,
            date: eventDate,
            service_id: serviceId,
            type: type,
            attendance: attendance,
            deposit: deposit,
            details: details
        }
    }

    return (
        <div className="w-72 flex flex-col ml-4">
            {/* Panel header */}
            <div className="text-2xl mb-4 font-bold">
                Detalii eveniment
            </div>

            <div className="mb-4">
                <div className="text-l mb-3 font-bold">
                    Alege sala
                </div>

                <FormDropdownComponent
                    options={adminServices}
                    value={serviceName}
                    onChange={handleServiceChange}
                />
            </div>

            <div className="mb-4">
                <div className="text-l mb-3 font-bold">
                    Nume rezervare
                </div>

                <FormTextInput
                    label={'Nume'}
                    type={'string'}
                    value={name}
                    onChange={handleNameChange}
                />
            </div>

            <div className="mb-4">
                <div className="text-l mb-3 font-bold">
                    Data
                </div>

                <Calendar
                    aria-label="Date (Controlled)"
                    value={parseDate(eventDate.split('T')[0])}
                    onChange={handleEventDateChange}
                    showMonthAndYearPickers
                    isDateUnavailable={isDateUnavailable}
                />
            </div>

            <div className="mb-4">
                <div className="text-l mb-3 font-bold">
                    Alte detalii
                </div>

                <div className="flex flex-col gap-2">
                    <FormTextInput
                        label={'Tip eveniment'}
                        type={'string'}
                        value={type}
                        onChange={handleTypeChange}
                    />

                    <FormTextInput
                        label={'Numar persoane (aproximativ)'}
                        type={'number'}
                        value={attendance}
                        onChange={handleAttendanceChange}
                    />

                    <FormTextInput
                        label={'Avans'}
                        type={'number'}
                        value={deposit}
                        onChange={handleDepositChange}
                    />

                    <FormTextInput
                        label={'Alte detalii'}
                        type={'string'}
                        value={details}
                        onChange={handleDetailsChange}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <AppButton title={'Renunta'} onClick={closePanel}/>
                <AppButton title={'Anuleaza eveniment'} onClick={closePanel}/>
                <AppButton title={'Salveaza detalii'} onClick={() => handleEventEdit(editedEvent())}/>
            </div>
        </div>
    );
};

export default EventDetails;
