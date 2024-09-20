import React from 'react';

export default function Button({ children, type, onClick = () => { }, normalWidth, icon, variant = 'default' }) {
    return (
        <button
            className={`${normalWidth ? 'min-w-32' : 'w-full'} group relative flex justify-center items-center space-x-2 py-3 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 text-white ${getVariantColor(variant)}`}
            type={type}
            onClick={onClick}
        >
            {icon && <span className='text-lg'>{icon}</span>}
            <span>{children}</span>
        </button>

    );
}

function getVariantColor(variant) {
    if (variant?.toLowerCase() === 'default') return 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500';
    if (variant?.toLowerCase() === 'save') return 'bg-green-500 hover:bg-green-600 focus:ring-green-500';
    if (variant?.toLowerCase() === 'cancel') return 'bg-red-500 hover:bg-red-600 focus:ring-red-500';
    return 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500';

}
