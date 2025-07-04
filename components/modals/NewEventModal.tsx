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
    CalendarDate, NumberInput
} from "@heroui/react";
import {today, getLocalTimeZone} from "@internationalized/date";
import {EventRecord} from "@/types/Event";
import FormDropdownComponent from "@/components/FormDropdownComponent";

type FiltersModalProps = {
    isOpen: boolean;
    onOpenChange: () => void;
    onSubmit: (newEventData: EventRecord) => void,
};

const NewEventModal: React.FC<FiltersModalProps> = ({ isOpen, onOpenChange, onSubmit }) => {
    const [serviceId, setServiceId] = React.useState<string>('');
    const [name, setName] = React.useState<string>();
    const [date, setDate] = React.useState<CalendarDate>(today(getLocalTimeZone()));
    const [type, setType] = React.useState<string>();
    const [attendance, setAttendance] = React.useState<number>();
    const [deposit, setDeposit] = React.useState<number>();
    const [details, setDetails] = React.useState<string>();

    const handleServiceChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setServiceId(e.target.value);
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
                                {/*<Dropdown>*/}
                                {/*    <DropdownTrigger>*/}
                                {/*        <Button>{selectedServiceValue}</Button>*/}
                                {/*    </DropdownTrigger>*/}
                                {/*    <DropdownMenu aria-label="sala" selectionMode="single">*/}
                                {/*        <DropdownItem key='Sala Roses'>Sala Roses</DropdownItem>*/}
                                {/*        <DropdownItem key='Sala Diamond'>Sala Diamond</DropdownItem>*/}
                                {/*    </DropdownMenu>*/}
                                {/*</Dropdown>*/}
                                <FormDropdownComponent
                                    options={['Sala Roses', 'Sala Diamond']}
                                    value={serviceId}
                                    onChange={handleServiceChange}
                                />

                                <h3 className="text-lg font-medium">Alege data</h3>
                                <Calendar aria-label="Date (Controlled)" value={date} onChange={setDate}/>
                            </div>
                            <div className="space-y-6">
                                <>
                                    <h3 className="text-lg font-medium">Nume rezervare</h3>
                                    <Input label="Nume" placeholder="" value={name} onValueChange={setName}/>
                                </>

                                <>
                                    <h3 className="text-lg font-medium">Alte detalii</h3>
                                    <div className="flex flex-col space-y-2">
                                        {/*<Dropdown>*/}
                                        {/*    <DropdownTrigger>*/}
                                        {/*        <Button>{selectedTypeValue}</Button>*/}
                                        {/*    </DropdownTrigger>*/}
                                        {/*    <DropdownMenu selectionMode="single">*/}
                                        {/*        <DropdownItem key='Nunta'>Nunta</DropdownItem>*/}
                                        {/*        <DropdownItem key='Botez'>Botez</DropdownItem>*/}
                                        {/*    </DropdownMenu>*/}
                                        {/*</Dropdown>*/}
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
                                <Button>Iesire</Button>
                                {/*<Button onSubmit={() => onSubmit({name, date.toString(), 1, selectedTypeValue, attendance, deposit, details})}>Salveaza eveniment</Button>*/}
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default NewEventModal;
