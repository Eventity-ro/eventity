import React, {useState} from 'react';
import {Button, Select, SelectItem, Calendar, Modal, ModalContent, ModalFooter, ModalHeader, ModalBody} from "@heroui/react";
import Image from 'next/image'
import {FaHeart, FaRegHeart, FaStar, FaEuroSign, FaAngleRight , FaAngleLeft } from 'react-icons/fa';

type ClientImagesProps = {
    isOpen: boolean;
    onOpenChange: () => void;
    images: any;
};

const ClientImages: React.FC<ClientImagesProps> = ({ isOpen, onOpenChange, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <Modal isOpen={isOpen} size="2xl" backdrop="blur" placement="center" onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalBody className="p-0 flex items-center justify-center relative">
                            {/* Previous Button */}
                            <Button
                                isIconOnly
                                variant="light"
                                className="absolute left-4 z-10 text-white"
                                onPress={prevImage}
                            >
                                <FaAngleLeft size={28} />
                            </Button>

                            {/* Main Image */}
                            <Image
                                src={images[currentIndex]}
                                alt={`Image ${currentIndex}`}
                                className="mx-auto rounded-lg max-h-[60vh]"
                            />

                            {/* Next Button */}
                            <Button
                                isIconOnly
                                variant="light"
                                className="absolute right-4 z-10 text-white"
                                onPress={nextImage}
                            >
                                <FaAngleRight size={28} />
                            </Button>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ClientImages;
