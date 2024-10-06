'use client';

import React, { useState } from 'react';

const ImageUploadComponent = () => {
    const [images, setImages] = useState<File[]>([]);

    // Handle image upload
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages = Array.from(files).slice(0, 15 - images.length); // Limit to max 15 images
            setImages([...images, ...newImages]);
        }
    };

    // Handle image removal
    const removeImage = (index: number) => {
        const updatedImages = images.filter((_, i) => i !== index);
        setImages(updatedImages);
    };

    return (
        <div className="w-full">
            <label className="block text-sm font-bold mb-2">Adaugă imagini <span className="font-normal text-gray-500">(Minim 5 - Maxim 15)</span></label>

            {/* Image placeholders */}
            <div className="flex gap-2 flex-wrap">
                {/* Render image preview */}
                {images.map((image, index) => (
                    <div key={index} className="relative w-20 h-20 border border-gray-300 rounded-md flex items-center justify-center">
                        <img
                            src={URL.createObjectURL(image)}
                            alt={`Uploaded ${index + 1}`}
                            className="object-cover w-full h-full rounded-md"
                        />
                        <button
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1"
                        >
                            &times;
                        </button>
                    </div>
                ))}

                {/* Add more images placeholder */}
                {images.length < 15 && (
                    <label
                        htmlFor="image-upload"
                        className="w-20 h-20 border border-dashed border-gray-400 rounded-md flex items-center justify-center cursor-pointer"
                    >
                        <span className="text-gray-400">+</span>
                        <input
                            id="image-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                    </label>
                )}
            </div>

            {/* Validation error */}
            {images.length < 5 && (
                <p className="text-red-500 text-sm mt-2">Trebuie să adăugați cel puțin 5 imagini.</p>
            )}
        </div>
    );
};

export default ImageUploadComponent;
