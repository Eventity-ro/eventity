'use client'

import exampleImage1 from "@/images/Example1.jpg"
import exampleImage2 from "@/images/Example2.jpg"

import {useState} from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { FaStar, FaShareAlt, FaHeart, FaChevronRight, FaCheck } from 'react-icons/fa';
import ReviewCard from "@/components/ReviewCard";
import NewReviewModal from "@/components/NewReviewModal";
import ClientContactInfo from "@/components/ClientContactInfo";
import MapComponent from "@/components/MapComponent";
import {Calendar} from "@heroui/react";
import {parseDate} from "@internationalized/date";

const ClientPage = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get('title');
    const rating = searchParams.get('rating');
    // const reviews = searchParams.get('reviews');
    const location = searchParams.get('location');

    const thumbnails = [exampleImage2, exampleImage1, exampleImage2, exampleImage1]

    const services = [
        'Servicii catering',
        'Cazare',
        'WI-fi',
        'Grădină',
        'Parcare privată',
        'Terasă',
        'Ospătari',
        'Piscină',
        'Evenimente aer liber',
        'Botezuri',
        'Sală conferințe',
        'Garderobă',
        'Recepție',
        'Cocktail bar',
        'Bucătărie proprie'
    ];

    const reviewData = [
        {
            name: 'David Dobrescu',
            date: '7 days ago',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor feugiat tellus cum dui viverra adipiscing feugiat. Rhoncus tempus sed est tempor, amet, mattis augue adipiscing sit. Mauris nulla.',
            rating: 5
        },
        {
            name: 'Anca Lungu',
            date: '16 days ago',
            review: 'Serra adipiscing feugiat. Rhoncus tempus sed est tempor, amet, mattis augue adipiscing sit. Mauris null.',
            rating: 4.5
        },
        {
            name: 'Irina Pop',
            date: '4 months ago',
            review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor feugiat tellus cum dui viverra adipiscing feugiat. Rhoncus tempus sed est tempor, amet, mattis augue adipiscing sit. Mauris nulla.',
            rating: 4
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="mx-10">
            <div className="p-2">
                <div className="mx-auto">
                    <div>
                        <h1 className="text-3xl font-bold">{title}</h1>
                        <div className="mb-1 flex justify-between items-center">
                            <div className="flex items-center text-gray-600">
                                <FaStar className="mr-1"/>
                                <span className="font-bold">{rating}</span>
                                <span className="mx-1">-</span>
                                <span className="underline font-bold">100 recenzii</span>
                                <span className="mx-2">·</span>
                                <span className="font-bold">{location}</span>
                            </div>
                            <div className="flex space-x-2 text-green-700">
                                <button className="flex items-center px-4 py-2">
                                    Distribuie
                                    <FaShareAlt className="ml-1"/>
                                </button>
                                <button className="flex items-center px-4 py-2">
                                    Salvează
                                    <FaHeart className="ml-1"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="relative lg:col-span-2 md:col-span-1 col-span-1">
                            <div className="relative w-full h-96">
                                <Image
                                    src={exampleImage1} // replace with actual image path
                                    alt="Main Image"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-l-lg"
                                />
                            </div>
                            <button
                                className="absolute bottom-5 left-2 px-4 py-2 bg-gray-100 text-green-700 rounded">Afișează
                                toate pozele
                            </button>
                        </div>
                        <div
                            className="hidden md:grid md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-2 lg:col-span-2 md:col-span-1">
                            {thumbnails.slice(0, 2).map((src, index) => (
                                <div key={index} className="relative w-full h-48 md:h-48 lg:h-48">
                                    <Image
                                        src={src} // replace with actual image path
                                        alt={`Thumb Image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        // className="rounded-lg"
                                    />
                                </div>
                            ))}
                            {thumbnails.slice(2).map((src, index) => (
                                <div key={index + 2} className="hidden lg:block relative w-full h-48 lg:h-48">
                                    <Image
                                        src={src} // replace with actual image path
                                        alt={`Thumb Image ${index + 3}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-r-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-20">
                        <div className="lg:col-span-2">

                            {/*Detalii capacitate / pret*/}
                            <div className="mb-4">
                                <p className="text-lg text-gray-400">Capacitate: 300-400 persoane</p>
                                <p className="text-lg">
                                    De la: <del>80 €/meniu</del> <span
                                    className="text-red-500 font-bold">Pret redus: 60 €/meniu</span>
                                </p>
                                <p className="text-lg text-gray-400">Ofertă valabilă: 28 Sept - 6 Oct, 2023</p>
                            </div>

                            <hr className="border-t border-gray-300 my-4"/>

                            {/*Descriere*/}
                            <div>
                                <h2 className="text-2xl font-bold mb-2">Descriere</h2>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas dolor feugiat
                                    tellus cum
                                    dui viverra adipiscing feugiat. Rhoncus tempus sed est tempor, amet, mattis augue
                                    adipiscing
                                    sit. Mauris nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                                    dolor
                                    feugiat tellus cum dui viverra adipiscing feugiat. Rhoncus tempus sed est tempor,
                                    amet,
                                    mattis augue adipiscing sit. Mauris nulla.
                                </p>
                                <a href="#" className="underline font-bold flex items-center">Vezi mai
                                    mult <FaChevronRight
                                        className="ml-1"/> </a>
                            </div>

                            <hr className="border-t border-gray-300 my-4"/>

                            {/*Servicii oferite*/}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Servicii oferite</h2>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {services.map((service, index) => (
                                        <div key={index}
                                             className="flex items-center px-3 py-1 border border-green-700 rounded-full font-bold">
                                            <FaCheck className="mr-2 text-green-700 "/>
                                            {service}
                                        </div>
                                    ))}
                                </div>
                                <a href="#" className="underline font-bold flex items-center">Vezi mai
                                    mult <FaChevronRight
                                        className="ml-1"/> </a>
                            </div>

                            <hr className="border-t border-gray-300 my-4"/>

                            {/*Recenzii*/}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Recenzii</h2>
                                <div className="flex overflow-x-scroll space-x-4 py-2">
                                    {reviewData.map((review, index) => (
                                        <ReviewCard key={index} {...review} />
                                    ))}
                                </div>
                                <button
                                    className="mt-4 px-4 py-2 text-green-700 rounded border border-green-700 hover:bg-green-700 hover:text-white"
                                    onClick={handleOpenModal}
                                >
                                    Adaugă recenzie
                                </button>
                            </div>

                            <hr className="border-t border-gray-300 my-4"/>

                            {/*Harta*/}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Localizare pe hartă</h2>
                                <p className="text-lg mb-2">{location}</p>
                                <MapComponent/>
                            </div>

                            <hr className="border-t border-gray-300 my-4"/>
                        </div>


                        <div className="lg:col-span-1">
                            <div className="sticky top-10">

                                {/*Calendar*/}
                                <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2025-01-02")} />

                                {/*Date contact*/}
                                <ClientContactInfo/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewReviewModal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
    );
};

export default ClientPage;
