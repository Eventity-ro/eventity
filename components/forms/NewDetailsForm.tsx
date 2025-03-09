'use client';

import React, {useState} from 'react';
import FormTextAreaInput from "@/components/FormTextAreaInput";
import FormMultiselectInput from "@/components/FormMultiselectInput";
import Link from "next/link";
import {useSearchParams} from "next/navigation";
import FormButton from "@/components/FormButton";

const NewDetailsForm = () => {

    const [description, setDescription] = useState('');

    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const capacity = searchParams.get('name');
    const price = searchParams.get('name');

    const sendDict = {
        name: name,
        capacity: capacity,
        price: price,
        description: description
    }

    const insertIntoDb = () => {

    }

    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-2">
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
            </div>

            {/* Submit Button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FormButton label='Inapoi' darkMode={false} onClick={() => console.log('Inapoi')}/>
                <FormButton label='Urmatorul pas' darkMode={true} onClick={() => insertIntoDb()}/>
            </div>
        </div>
    );
};

export default NewDetailsForm;
