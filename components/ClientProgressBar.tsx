'use client';

import React from 'react';

interface ClientProgressBarProps {
    firstStepActioned: boolean;
    secondStepActioned: boolean;
    thirdStepActioned: boolean;
}

const ClientProgressBar: React.FC<ClientProgressBarProps> = ({ firstStepActioned, secondStepActioned, thirdStepActioned }) => {
    return (
        <div className="flex w-2/3 items-center justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center rounded-full border-4 justify-center w-10 h-10"
                 style={{borderColor: '#5C8171', backgroundColor: firstStepActioned ? '#5C8171' : 'white'}}>
                <span className="text-2xl font-bold"
                      style={{color: firstStepActioned ? 'white' : '#5C8171'}}>1</span>
            </div>

            {/* Dashed line */}
            <div className="border-2 border-dashed w-1/3" style={{borderColor: '#5C8171'}}></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center rounded-full border-4 justify-center w-10 h-10"
                 style={{borderColor: '#5C8171', backgroundColor: secondStepActioned ? '#5C8171' : 'white'}}>
                <span className="text-2xl font-bold" style={{color: secondStepActioned ? 'white' : '#5C8171'}}>2</span>
            </div>

            {/* Dashed line */}
            <div className="border-2 border-dashed w-1/3"
                 style={{borderColor: '#5C8171'}}></div>

            {/* Step 3 */}
            <div className="flex flex-col items-center rounded-full border-4 justify-center w-10 h-10"
                 style={{borderColor: '#5C8171', backgroundColor: thirdStepActioned ? '#5C8171' : 'white'}}>
                <span className="text-2xl font-bold" style={{color: thirdStepActioned ? 'white' : '#5C8171'}}>3</span>
            </div>
        </div>
    );
};

export default ClientProgressBar;
