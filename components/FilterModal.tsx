import React from 'react';
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Calendar, Modal, ModalContent, ModalFooter, ModalHeader, ModalBody} from "@heroui/react";
import {parseDate} from "@internationalized/date";

type FiltersModalProps = {
    isOpen: boolean;
    onOpenChange: () => void;
};

const FilterModal: React.FC<FiltersModalProps> = ({ isOpen, onOpenChange }) => {
    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} size="xl" onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Filtre
                            <hr className="my-2 border-black"/>
                        </ModalHeader>
                        <ModalBody className="grid grid-cols-2">
                                <>
                                    {/*<h3 className="text-lg font-medium">Disponibilitate</h3>*/}
                                    {/*<p className="text-sm text-gray-500 mt-2">*/}
                                    {/*    *Filtrarea se face pe baza datelor oferite de către clienți. Orice neconcordanță*/}
                                    {/*    este asumată de către clienții afișați.*/}
                                    {/*</p>*/}
                                    <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2025-01-02")}/>
                                </>
                                <div className="space-y-6">
                                    <>
                                        <h3 className="text-lg font-medium">Număr persoane/sală</h3>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <Button>Sub 100</Button>
                                            <Button>100-300</Button>
                                            <Button>300-500</Button>
                                            <Button>Peste 500</Button>
                                        </div>
                                    </>

                                    <>
                                        <h3 className="text-lg font-medium">Locație</h3>
                                        <div className="flex flex-col space-y-2">
                                            <Dropdown>
                                                <DropdownTrigger>
                                                    <Button>Alege județ</Button>
                                                </DropdownTrigger>
                                                <DropdownMenu aria-label="Județe">
                                                    <DropdownItem key='judet'>Alege județ</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                            <Dropdown className="mt-2">
                                                <DropdownTrigger>
                                                    <Button>Alege localitate</Button>
                                                </DropdownTrigger>
                                                <DropdownMenu aria-label="Localități">
                                                    <DropdownItem key='localitate'>Alege localitate</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </>
                                </div>
                        </ModalBody>
                        <ModalFooter className="flex flex-col gap-1">
                            <hr className="my-2 border-black"/>
                            <div className="flex justify-between items-center w-full">
                                <Button>Șterge filtrele</Button>
                                <Button>Vezi 285 rezultate</Button>
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default FilterModal;
