'use client'

import Image from 'next/image'
import {FaHeart, FaRegHeart, FaStar, FaEuroSign, FaAngleRight , FaAngleLeft } from 'react-icons/fa';
import {useState} from "react";
import Link from 'next/link';

interface HomeCardProps {
    restaurantId: number;
    name: string;
    location: string;
    startingPrice: number;
    imageList: any[];
    rating: number;
    minCapacity: number;
    maxCapacity: number;
}

export default function HomeCard({ restaurantId, name, location, startingPrice, imageList, rating, minCapacity, maxCapacity }: HomeCardProps) {
    const [liked, setLiked] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevClick = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentImage < imageList.length - 1) {
            setCurrentImage(currentImage + 1);
        }
    };

    const getIndicatorRange = () => {
        const total = imageList.length;
        if (total <= 5) {
            return Array.from({ length: total }, (_, i) => i);
        }
        const start = Math.min(
            Math.max(currentImage - 2, 0),
            total - 5
        );
        return Array.from({ length: 5 }, (_, i) => start + i);
    };

    return (
        <div className="w-full rounded-lg overflow-hidden relative group">
                <div className="relative">
                    <Link href={{pathname: "/client", query: {restaurantId: restaurantId, name: name, rating: rating, location: location}}}>
                        <Image src={imageList[currentImage]} alt="Example Image"/>
                    </Link>
                    <div
                        className="absolute top-5 -left-1 bg-white text-gray-700 p-2 flex items-center h-4 rounded border">
                        <FaStar className="mr-1"/>
                        <span className="font-bold text-sm">{rating}</span>
                    </div>
                    <button
                        onClick={() => setLiked(!liked)}
                        className="absolute top-4 right-3 bg-white text-red-700 rounded-full p-2 shadow-md focus:outline-none">
                        {liked ? <FaHeart/> : <FaRegHeart/>}
                    </button>
                    {currentImage > 0 && (
                        <button
                            onClick={handlePrevClick}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <FaAngleLeft/>
                        </button>
                    )}
                    {currentImage < imageList.length - 1 && (
                        <button
                            onClick={handleNextClick}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-md focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <FaAngleRight/>
                        </button>
                    )}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
                        {getIndicatorRange().map((index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white' : 'bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
            <div className="flex flex-col justify-center p-2 flex-grow">
                <h3 className="text-lg font-bold mb-1">{name}</h3>
                <p>Locatie: {location}</p>
                <p className="font-bold flex items-center">De la: {startingPrice} <FaEuroSign/></p>
                <p>Capacitate: {minCapacity} - {maxCapacity} persoane</p>
            </div>
        </div>
    )
}