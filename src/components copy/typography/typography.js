import React from 'react';

export default function Typography({ children, variant = 'h1' }) {
    if (variant === 'h1') return (
        <h1 className="text-center text-3xl font-extrabold text-gray-700">
            {children}
        </h1>
    );
    else if (variant === 'h2') return (
        <h2 className="mt-4 text-md text-center text-gray-400">{children}</h2>
    );
    else if (variant === 'h3') return (
        <h2 className="mt-4 text-sm text-center text-gray-400">{children}</h2>
    );
    else if (variant === 'h4') return (
        <h2 className="mt-4 text-xs text-center text-gray-400">{children}</h2>
    );
    else if (variant === 'logo') return (
        <h2 className="text-center text-4xl font-semibold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{children}</h2>
    );
}
