import React from 'react';
import {Button, Textarea, Input, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Calendar, Modal, ModalContent, ModalFooter, ModalHeader, ModalBody} from "@heroui/react";
import {parseDate} from "@internationalized/date";

type FiltersModalProps = {
    isOpen: boolean;
    onOpenChange: () => void;
};

const NewEventModal: React.FC<FiltersModalProps> = ({ isOpen, onOpenChange }) => {
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
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button>Alege sala</Button>
                                    </DropdownTrigger>
                                    <DropdownMenu aria-label="sala">
                                        <DropdownItem key='sala'>Sala Roses</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>

                                <h3 className="text-lg font-medium">Alege data</h3>
                                <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2025-01-02")}/>
                            </div>
                            <div className="space-y-6">
                                <>
                                    <h3 className="text-lg font-medium">Nume rezervare</h3>
                                    <Input label="Nume" placeholder=""/>
                                </>

                                <>
                                    <h3 className="text-lg font-medium">Alte detalii</h3>
                                    <div className="flex flex-col space-y-2">
                                        <Dropdown>
                                            <DropdownTrigger>
                                                <Button>Tip eveniment</Button>
                                            </DropdownTrigger>
                                            <DropdownMenu aria-label="Județe">
                                                <DropdownItem key='judet'>Alege județ</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                        <Input label="Numar persoane (aproximativ)" placeholder=""/>
                                        <Input label="Avans" placeholder=""/>
                                        <Textarea className="max-w-xs" label="Alte detalii" placeholder="" />
                                    </div>
                                </>
                            </div>
                        </ModalBody>
                        <ModalFooter className="flex flex-col gap-1">
                            <hr className="my-2 border-black"/>
                            <div className="flex justify-between items-center w-full">
                                <Button>Iesire</Button>
                                <Button>Salveaza eveniment</Button>
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default NewEventModal;
