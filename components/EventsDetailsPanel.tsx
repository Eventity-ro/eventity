import React from 'react';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input} from "@heroui/react";
import {EventRecord} from "@/types/Event";

interface EventsDetailsPanelProps {
    selectedEvents: EventRecord[];
    closePanel: () => void;
}

const EventsDetailsPanel: React.FC<EventsDetailsPanelProps> = ({ selectedEvents, closePanel }) => {
    const [selectedKeys, setSelectedKeys] = React.useState<any>(new Set([selectedEvents[0].name]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", "),
        [selectedKeys]
    );

    const locationDropdown = () => {
        return (
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                    >
                        {selectedValue}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Static Actions"
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={setSelectedKeys}
                >
                    <DropdownItem key="Bucuresti">Bucuresti</DropdownItem>
                    <DropdownItem key="Cluj">Cluj</DropdownItem>
                    <DropdownItem key="Timisoara">Timisoara</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }

    if (!selectedEvents) return null;

    return (
        <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-5 z-50 border-l">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Detalii eveniment</h2>
                <button onClick={closePanel} className="text-xl font-bold">
                    X
                </button>
            </div>
            <div>
                <p className="mb-2">
                    <div className='font-bold mb-2'>Alege sala:</div>
                    {locationDropdown()}
                </p>
                <p className="mb-2">
                    <div className='font-bold mb-2'>Nume rezervare:</div>
                    <Input isReadOnly label='Nume' defaultValue={selectedEvents[0].name}/>
                </p>
                <p className="mb-2">
                    <div className='font-bold mb-2'>Alte detalii</div>

                </p>
                <button className="bg-red-500 text-white px-4 py-2 mt-4 w-full">Anulează eveniment</button>
                <button className="bg-green-500 text-white px-4 py-2 mt-2 w-full">Salvează detalii</button>
            </div>
        </div>
    );
};

export default EventsDetailsPanel;
