import React from 'react';


function getThemeStyle(theme) {
    if (theme === 'red') return 'border-red-500 text-red-500';
    else if (theme === 'blue') return 'border-blue-500 text-blue-500';
    else if (theme === 'green') return 'border-green-500 text-green-500';
    else if (theme === 'orange') return 'border-orange-500 text-orange-500';
    else if (theme === 'yellow') return 'border-yellow-500 text-yellow-500';
    else return '';
}

export default function DataCard({ theme, label, data }) {


    return (
        <div className={`bg-white p-4 rounded-lg shadow-md border-l-4 ${getThemeStyle(theme)}`}>
            <h3 className='text-lg font-semibold text-gray-700'>{label}</h3>
            <p className='text-2xl font-bold'>{data}</p>
        </div>
    );
}
