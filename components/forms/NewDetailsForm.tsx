'use client';

import React, {useState} from 'react';
import FormButton from "@/components/FormButton";
import ImageUploadComponent from "@/components/forms/ImageUploadComponent";
import FormTextAreaInput from "@/components/FormTextAreaInput";
import FormMultiselectInput from "@/components/FormMultiselectInput";

const NewDetailsForm = () => {

    const [description, setDescription] = useState('');


    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Alte detalii</h2>

            {/* Information */}
            <div className="w-full">

                {/* Price */}
                <div className='mb-2'>
                    <FormTextAreaInput label='Descriere generala' maxLength={300}
                                       setTextArea={setDescription} textArea={description}/>
                </div>
                <div>
                    <FormMultiselectInput/>
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-20 flex justify-end gap-2">
                <div className="w-1/2">
                    <FormButton label='Inapoi' darkMode={false} onClick={() => console.log('Inapoi')}/>
                </div>
                <div className="w-1/2">
                    <FormButton label='Urmatorul pas' darkMode={true} onClick={() => console.log(description)}/>
                </div>
            </div>
        </div>
    );
};

export default NewDetailsForm;
