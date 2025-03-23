'use client';

import React, { useState } from 'react';

const ImageUploadComponent = () => {
    const [images, setImages] = useState<File[]>([]);

    const minWidth = 1024; // example minimum width
    const minHeight = 683; // example minimum height
    const targetRatio = 3 / 2; // aspect ratio 3:2
    const ratioTolerance = 0.01; // allow slight variation

    const cropImageFile = (file: File): Promise<File> => {
        return new Promise((resolve, reject) => {
            const objectUrl = URL.createObjectURL(file);
            const img = new Image();
            img.src = objectUrl;
            img.onload = () => {
                const width = img.width;
                const height = img.height;
                const currentRatio = width / height;

                // If the current ratio is within tolerance, no cropping is needed.
                if (Math.abs(currentRatio - targetRatio) < ratioTolerance) {
                    URL.revokeObjectURL(objectUrl);
                    resolve(file);
                    return;
                }

                let newWidth = width;
                let newHeight = height;
                let sx = 0, sy = 0;

                // Determine which dimension to crop based on the ratio
                if (currentRatio > targetRatio) {
                    // Image is too wide, crop the sides.
                    newWidth = height * targetRatio;
                    sx = (width - newWidth) / 2;
                } else {
                    // Image is too tall, crop the top and bottom.
                    newHeight = width / targetRatio;
                    sy = (height - newHeight) / 2;
                }

                // Optionally, ensure that the cropped image still meets minimum resolution.
                if (newWidth < minWidth || newHeight < minHeight) {
                    alert(`Image ${file.name} does not meet the minimum resolution after cropping.`);
                    URL.revokeObjectURL(objectUrl);
                    reject(new Error('Minimum resolution not met after cropping'));
                    return;
                }

                // Create a canvas to perform the crop.
                const canvas = document.createElement("canvas");
                canvas.width = newWidth;
                canvas.height = newHeight;
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    URL.revokeObjectURL(objectUrl);
                    reject(new Error("Failed to get canvas context"));
                    return;
                }

                // Draw the cropped portion of the image onto the canvas.
                ctx.drawImage(img, sx, sy, newWidth, newHeight, 0, 0, newWidth, newHeight);

                // Convert the canvas content to a Blob and then to a File.
                canvas.toBlob(blob => {
                    URL.revokeObjectURL(objectUrl);
                    if (blob) {
                        const croppedFile = new File([blob], file.name, { type: file.type });
                        resolve(croppedFile);
                    } else {
                        reject(new Error("Canvas is empty"));
                    }
                }, file.type);
            };
            img.onerror = (err) => {
                URL.revokeObjectURL(objectUrl);
                reject(err);
            };
        });
    };

    // Handle image upload and perform cropping if needed.
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newFiles = Array.from(files).slice(0, 15 - images.length); // Limit to max 15 images
            newFiles.forEach(file => {
                cropImageFile(file)
                    .then(croppedFile => {
                        setImages(prev => [...prev, croppedFile]);
                    })
                    .catch(err => {
                        console.error("Error processing file", file.name, err);
                    });
            });
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
