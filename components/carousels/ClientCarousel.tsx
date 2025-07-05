'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import {FaChevronLeft, FaShareAlt, FaHeart, FaRegHeart} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import {CiHeart} from "react-icons/ci";
import {useRouter} from "next/navigation";

interface ClientImageCarouselProps {
    images: StaticImageData[];
    onBackClick?: () => void;
    onShareClick?: () => void;
    onFavoriteClick?: () => void;
}

export default function ClientCarousel({
                                                images,
                                                onBackClick,
                                                onShareClick,
                                                onFavoriteClick,
                                            }: ClientImageCarouselProps) {

    const router = useRouter();
    const handleBackClick = () => {
        router.back();
    };

    return (
        <div className="relative w-full h-64 overflow-hidden">
            {/* Back arrow */}
            <button
                className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow"
                onClick={handleBackClick}
                aria-label="Go back"
            >
                <FaChevronLeft size={20} color={'#5C8171'}/>
            </button>
            {/* Share and Save icons */}
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
                <button
                    className="p-2 bg-white rounded-full shadow"
                    onClick={onShareClick}
                    aria-label="Share"
                >
                    <FaShareAlt size={18} color={'#5C8171'}/>
                </button>
                <button
                    className="p-2 bg-white rounded-full shadow"
                    onClick={onFavoriteClick}
                    aria-label="Favorite"
                >
                    <FaRegHeart size={18} color={'#5C8171'}/>
                </button>
            </div>

            <Swiper
                modules={[Pagination]}
                pagination={{ type: 'fraction' }}
                slidesPerView={1}
                loop
                className="w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-64">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
