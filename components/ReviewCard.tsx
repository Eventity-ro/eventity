// components/ReviewCard.tsx
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface ReviewCardProps {
    name: string;
    date: string;
    review: string;
    rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, date, review, rating }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        if (index < Math.floor(rating)) {
            return <FaStar key={index} className="text-green-700" />;
        } else if (index < rating) {
            return <FaStarHalfAlt key={index} className="text-green-700" />;
        } else {
            return <FaRegStar key={index} className="text-green-700" />;
        }
    });

    return (
        <div className="border rounded-lg p-4 bg-white shadow-md w-64 flex-shrink-0 flex flex-col justify-between">
            <div>
                <div className="font-bold text-lg">{name}</div>
                <div className="text-gray-500 text-sm">{date}</div>
                <p className="my-2 text-gray-700">{review}</p>
            </div>
            <div className="flex space-x-1 mt-2">{stars}</div>
        </div>
    );
};

export default ReviewCard;
