import React from 'react';

export default function Typography({ children, variant = 'h1' }) {
    if (variant === 'h1') return (
        <h1 className="text-center text-3xl font-extrabold text-gray-700">
            {children}
        </h1>
    );
    else if (variant === 'h2') return (
        <h2 className="mt-4 text-center text-gray-400">{children}</h2>
    );
}
