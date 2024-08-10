import React from 'react';
import { FaStar, FaRegStar, FaTimes } from 'react-icons/fa';

interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
    const [rating, setRating] = React.useState(0);
    const [review, setReview] = React.useState('');

    if (!isOpen) return null;

    const handleRating = (index: number) => {
        setRating(index + 1);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96 relative">
                <div className="flex justify-between items-center mb-4">
                    <button className="text-gray-600" onClick={onClose}>
                        <FaTimes/>
                    </button>
                    <h2 className="text-xl font-bold mx-auto">Recenzie</h2>
                </div>
                <hr className="border-t border-gray-300 my-4"/>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Nota</h3>
                    <div className="flex space-x-2 mt-2">
                        {Array.from({length: 5}, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handleRating(index)}
                                className="text-green-700"
                            >
                                {index < rating ? <FaStar className="text-xl"/> : <FaRegStar className="text-xl"/>}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Scrie recenzia ta</h3>
                    <textarea
                        className="w-full p-2 border rounded-md"
                        rows={4}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <div className="text-right text-sm text-gray-500 mt-1">
                        {review.length}/300
                    </div>
                </div>
                <button
                    className="w-full px-4 py-2 text-green-700 rounded border border-green-700 hover:bg-green-700 hover:text-white"
                    onClick={onClose}
                >
                    Trimite
                </button>
            </div>
        </div>
    );
};

export default ReviewModal;
