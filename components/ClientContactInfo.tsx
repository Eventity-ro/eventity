import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';

const ClientContactInfo: React.FC = () => {
    return (
        <div className="bg-white rounded-lg p-6 drop-shadow-lg">
            <h2 className="text-xl font-bold mb-4">Date de contact</h2>
            <div className="flex items-center mb-2 text-gray-500">
                <FaPhone className="mr-2 text-green-700" />
                <span className="underline">+40 755 123 456</span>
            </div>
            <div className="flex items-center mb-2 text-gray-500">
                <FaEnvelope className="mr-2 text-green-700" />
                <span className="underline">restaurant@gmail.com</span>
            </div>
            <div className="flex items-center mb-2 text-gray-500">
                <FaFacebook className="mr-2 text-green-700" />
                <span className="underline">@facebook.restaurant</span>
            </div>
            <div className="flex items-center text-gray-500">
                <FaInstagram className="mr-2 text-green-700" />
                <span className="underline">@restaurant</span>
            </div>
        </div>
    );
};

export default ClientContactInfo;
