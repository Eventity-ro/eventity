'use client';

import React, {useState} from 'react';
import FormTextAreaInput from "@/components/FormTextAreaInput";
import FormMultiselectInput from "@/components/FormMultiselectInput";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

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
                {/*    <FormButton label='Inapoi' darkMode={false} onClick={() => console.log('Inapoi')}/>*/}
                    <Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services/new/venue"}>
                        Inapoi
                    </Link>
                </div>
                <div className="w-1/2">
                    {/*<FormButton label='Urmatorul pas' darkMode={true} onClick={() => console.log(description)}/>*/}
                    {/*<Link className="bg-[#5C8171] text-white px-6 py-2 rounded mb-5" href={"/admin/services"}>*/}
                    {/*    Finalizeaza*/}
                    {/*</Link>*/}
                    <button onClick={() => insertIntoDb()}>Finalizeaza</button>
                </div>
            </div>
        </div>
    );
};

export default NewDetailsForm;
