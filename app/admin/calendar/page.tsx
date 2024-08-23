import React from 'react';
import Calendar from '@/components/AdminMonthCalendar';

function App() {

    const unavailableDates = {
        'Nuntă': [new Date(2024, 7, 21), new Date(2024, 7, 22), new Date(2024, 7, 23)],
        'Botez': [new Date(2024, 7, 26)],
    };

    return (
        <div>
            <Calendar year={2024} month={7} unavailableDates={unavailableDates}/> {/* August 2024 */}
        </div>
    );
}

export default App;
