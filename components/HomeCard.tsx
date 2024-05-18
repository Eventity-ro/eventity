import Image from 'next/image'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import {useState} from "react";

interface HomeCardProps {
    title: string;
    description: string;
    image: any;
    rating: number;
}

export default function HomeCard({ title, description, image, rating }: HomeCardProps) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="w-full border rounded-lg overflow-hidden relative">
            <div className="relative">
                <Image src={image} alt="Example Image"/>
                <div
                    className="absolute top-5 -left-1 bg-white text-gray-700 p-2 flex items-center h-4 rounded border">
                    <FaStar className="mr-1"/>
                    <span className="font-bold text-sm">{rating}</span>
                </div>
                <button
                    onClick={() => setLiked(!liked)}
                    className="absolute top-4 right-3 bg-white text-green-800 rounded-full p-2 shadow-md focus:outline-none">
                    {liked ? <FaHeart/> : <FaRegHeart/>}
                </button>
            </div>
            <div className="flex flex-col justify-center p-2 flex-grow">
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}