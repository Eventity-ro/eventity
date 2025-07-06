import React, {useCallback} from 'react';
import {
    Button,
    Textarea,
    Input,
    Calendar,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalBody,
    NumberInput
} from "@heroui/react";
import {today, getLocalTimeZone, parseDate} from "@internationalized/date";
import FormDropdownComponent from "@/components/FormDropdownComponent";
import {Service} from "@/types/Service";

type FiltersModalProps = {
    isOpen: boolean;
    onOpenChange: () => void;
    onSubmit: (newEventData: any) => void;
    adminServices: Service[];
};

const NewEventModal: React.FC<FiltersModalProps> = ({ isOpen, onOpenChange, onSubmit, adminServices }) => {

    const [serviceId, setServiceId] = React.useState<number>(adminServices[0].id);
    const [serviceName, setServiceName] = React.useState<string>(adminServices[0].name);
    const [name, setName] = React.useState<string>('');
    const [eventDate, setEventDate] = React.useState<string>(today(getLocalTimeZone()).toString());
    const [type, setType] = React.useState<string>('Nunta');
    const [attendance, setAttendance] = React.useState<number>(0);
    const [deposit, setDeposit] = React.useState<number>(0);
    const [details, setDetails] = React.useState<string>('');

    const handleTypeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setType(e.target.value);
    }, []);

    const handleEventDateChange = useCallback((newEventDate: any) => {
        setEventDate(newEventDate.toString());
    }, []);

    const handleServiceIdChange = (newId: number) => {
        setServiceId(newId);
    };

    const handleServiceNameChange = (newName: string) => {
        setServiceName(newName);
    };

    const handleServiceChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        handleServiceNameChange(e.target.value);
        handleServiceIdChange(Number(e.target.id));
    }, []);

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} size="xl" onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Adauga eveniment nou
                            <hr className="my-2 border-black"/>
                        </ModalHeader>
                        <ModalBody className="grid grid-cols-2">
                            <div className='flex flex-col space-y-6'>
                                <h3 className="text-lg font-medium">Alege sala</h3>
                                <FormDropdownComponent
                                    options={adminServices}
                                    value={serviceName}
                                    onChange={handleServiceChange}
                                />

                                <h3 className="text-lg font-medium">Alege data</h3>
                                <Calendar aria-label="Date (Controlled)" value={parseDate(eventDate)} onChange={handleEventDateChange}/>
                            </div>
                            <div className="space-y-6">
                                <>
                                    <h3 className="text-lg font-medium">Nume rezervare</h3>
                                    <Input label="Nume" placeholder="" value={name} onValueChange={setName}/>
                                </>

                                <>
                                    <h3 className="text-lg font-medium">Alte detalii</h3>
                                    <div className="flex flex-col space-y-2">
                                        <FormDropdownComponent
                                            options={['Nunta', 'Botez']}
                                            value={type}
                                            onChange={handleTypeChange}
                                        />
                                        <NumberInput label="Numar persoane (aproximativ)" placeholder="" value={attendance} onValueChange={setAttendance}/>
                                        <NumberInput label="Avans" placeholder="" value={deposit} onValueChange={setDeposit}/>
                                        <Textarea className="max-w-xs" label="Alte detalii" placeholder="" value={details} onValueChange={setDetails}/>
                                    </div>
                                </>
                            </div>
                        </ModalBody>
                        <ModalFooter className="flex flex-col gap-1">
                            <hr className="my-2 border-black"/>
                            <div className="flex justify-between items-center w-full">
                                <Button onPress={onClose}>Iesire</Button>
                                <Button
                                    onPress={() => {
                                        onSubmit({name, eventDate, serviceId, type, attendance, deposit, details});
                                        onClose();
                                    }}
                                >Salveaza eveniment</Button>
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default NewEventModal;
