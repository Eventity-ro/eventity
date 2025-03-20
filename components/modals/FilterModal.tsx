import React, {useState} from 'react';
import {Button, Select, SelectItem, Calendar, Modal, ModalContent, ModalFooter, ModalHeader, ModalBody} from "@heroui/react";
import {parseDate} from "@internationalized/date";

type FiltersModalProps = {
    isOpen: boolean;
    onOpenChange: () => void;
    setFilters: any;
};

const judete = [
    {key: 'Bucuresti', label: 'Bucuresti'},
    {key: 'Cluj', label: 'Cluj'},
    {key: 'Maramures', label: 'Maramures'}
]

const cities = (judet: string) => {
    if (judet == 'Bucuresti') return [{key: 'Bucuresti', label: 'Bucuresti'}]
    if (judet == 'Cluj') return [{key: 'Cluj-Napoca', label: 'Cluj-Napoca'}]
    if (judet == 'Maramures') return [{key: 'Baia Mare', label: 'Baia Mare'}, {key: 'Sighetu Marmatiei', label: 'Sighetu Marmatiei'}]

    return []
}

const FilterModal: React.FC<FiltersModalProps> = ({ isOpen, onOpenChange, setFilters }) => {
    if (!isOpen) return null;

    const [minCapacity, setMinCapacity] = useState(null)
    const [maxCapacity, setMaxCapacity] = useState(null)
    const [city, setCity] = useState('')
    const [judet, setJudet] = useState('')

    const handleJudetSelect = (newJudet) => {
        setJudet(newJudet.target.value);
    };

    const handleCitySelect = (newCity) => {
        setCity(newCity.target.value);
    };

    return (
        <Modal isOpen={isOpen} size="2xl" onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Filtre
                            <hr className="my-2 border-black"/>
                        </ModalHeader>
                        <ModalBody className="grid grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-lg font-medium">Disponibilitate</h3>
                                <p className="text-sm my-2">
                                    *Filtrarea se face pe baza datelor oferite de către clienți. Orice
                                    neconcordanță
                                    este asumată de către clienții afișați.
                                </p>
                                <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2025-01-02")}/>
                            </div>
                            <div className="space-y-6">
                                <>
                                    <h3 className="text-lg font-medium">Număr persoane/sală</h3>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <Button onPress={() => setMaxCapacity(100)}>Sub 100</Button>
                                            <Button onPress={() => {
                                                setMaxCapacity(300)
                                                setMinCapacity(100)
                                            }}>100-300</Button>
                                            <Button onPress={() => {
                                                setMaxCapacity(500)
                                                setMinCapacity(300)
                                            }}>300-500</Button>
                                            <Button onPress={() => setMinCapacity(500)}>Peste 500</Button>
                                        </div>
                                    </>

                                    <>
                                        <h3 className="text-lg font-medium">Locație</h3>
                                        <div className="flex flex-col space-y-2">
                                            <Select
                                                className="max-w-xs"
                                                label="Selecteaza Judet"
                                                onChange={handleJudetSelect}>
                                                {judete.map((judet) => (
                                                    <SelectItem key={judet.key}>{judet.label}</SelectItem>
                                                ))}
                                            </Select>
                                            <Select
                                                className="max-w-xs"
                                                label="Selecteaza Oras"
                                                onChange={handleCitySelect}
                                            >
                                                {cities(judet).map((city) => (
                                                    <SelectItem key={city.key}>{city.label}</SelectItem>
                                                ))}
                                            </Select>
                                        </div>
                                    </>
                                </div>
                        </ModalBody>
                        <ModalFooter className="flex flex-col gap-1">
                            <hr className="my-2 border-black"/>
                            <div className="flex justify-between items-center w-full">
                                <Button onPress={() => {
                                    setFilters({})
                                }}>Șterge filtrele</Button>
                                <Button onPress={() => {
                                    setFilters({min_capacity: minCapacity, max_capacity: maxCapacity, city: city})
                                    onClose()
                                }}>Vezi rezultate</Button>
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default FilterModal;
