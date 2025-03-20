'use client';

import React, {useState} from 'react';
import FormTextAreaInput from "@/components/FormTextAreaInput";
import FormMultiselectInput from "@/components/FormMultiselectInput";
import FormButton from "@/components/FormButton";

interface NewDetailsFormProps {
    onBack: () => void,
    onSubmit: () => void;
}
const NewDetailsForm: React.FC<NewDetailsFormProps> = ({onBack, onSubmit}) => {

    const [description, setDescription] = useState('');

    const validateFormFields = () => {
        return true;
    };

    const handleSubmit = () => {
        const isValid = validateFormFields();
        onSubmit();
    };

    return (
        <div className="w-full mx-auto mt-8 bg-white p-6 rounded-lg shadow-2xl">
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
                <FormButton label='Inapoi' darkMode={false} onClick={onBack}/>
                <FormButton label='Urmatorul pas' darkMode={true} onClick={handleSubmit}/>
            </div>
        </div>
    );
};

export default NewDetailsForm;
