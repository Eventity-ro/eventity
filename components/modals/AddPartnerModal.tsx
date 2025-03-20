import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@heroui/react";
import React from "react";

type AddPartnerModalProps = {
    isOpen: boolean;
    onOpenChange: () => void;
};

const AddPartnerModal: React.FC<AddPartnerModalProps> = ({ isOpen, onOpenChange }) => {
    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Adauga partener nou
                            <hr className="my-2 border-black"/>
                        </ModalHeader>
                        <ModalBody>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                quam.
                            </p>
                            <p>
                                Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                deserunt nostrud ad veniam.
                            </p>
                        </ModalBody>
                        <ModalFooter className="flex flex-col gap-1">
                            <hr className="my-2 border-black"/>
                            <div className="flex justify-between items-center w-full">
                                <Button onPress={onClose}>Iesire</Button>
                                <Button onPress={onClose}>Vezi rezultate</Button>
                            </div>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}

export default AddPartnerModal;