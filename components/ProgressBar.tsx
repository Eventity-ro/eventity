'use client';

import React from 'react';

interface ClientProgressBarProps {
    currentStep: number;
}

const ProgressBar: React.FC<ClientProgressBarProps> = ({ currentStep }) => {
    return (
        <div className="flex w-2/3 items-center justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center rounded-full border-4 justify-center w-10 h-10"
                 style={{borderColor: '#5C8171', backgroundColor: currentStep==1 ? '#5C8171' : 'white'}}>
                <span className="text-2xl font-bold"
                      style={{color: currentStep==1 ? 'white' : '#5C8171'}}>1</span>
            </div>

            {/* Dashed line */}
            <div className="border-2 border-dashed w-2/3" style={{borderColor: '#5C8171'}}></div>

            {/* Step 2 */}
            <div className="flex flex-col items-center rounded-full border-4 justify-center w-10 h-10"
                 style={{borderColor: '#5C8171', backgroundColor: currentStep==2 ? '#5C8171' : 'white'}}>
                <span className="text-2xl font-bold" style={{color: currentStep==2 ? 'white' : '#5C8171'}}>2</span>
            </div>
        </div>
    );
};

export default ProgressBar;
