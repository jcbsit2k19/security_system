import React from 'react';

const IconButton = ({ children, tooltip, variant = "gray", onClick = () => { } }) => {
    // Define base class names
    const baseClasses = 'group relative flex items-center justify-center rounded-full border h-8 w-8';
    const variantClasses = {
        gray: 'border-gray-800 text-gray-800 hover:bg-gray-800 hover:border-gray-800',
        red: 'border-red-800 text-red-800 hover:bg-red-800 hover:border-red-800',
        yellow: 'border-yellow-800 text-yellow-800 hover:bg-yellow-800 hover:border-yellow-800',
        green: 'border-green-800 text-green-800 hover:bg-green-800 hover:border-green-800',
        blue: 'border-blue-800 text-blue-800 hover:bg-blue-800 hover:border-blue-800',
        indigo: 'border-indigo-800 text-indigo-800 hover:bg-indigo-800 hover:border-indigo-800',
        purple: 'border-purple-800 text-purple-800 hover:bg-purple-800 hover:border-purple-800',
        pink: 'border-pink-800 text-pink-800 hover:bg-pink-800 hover:border-pink-800',
        orange: 'border-orange-800 text-orange-800 hover:bg-orange-800 hover:border-orange-800',
        teal: 'border-teal-800 text-teal-800 hover:bg-teal-800 hover:border-teal-800',
        cyan: 'border-cyan-800 text-cyan-800 hover:bg-cyan-800 hover:border-cyan-800',
        lime: 'border-lime-800 text-lime-800 hover:bg-lime-800 hover:border-lime-800',
        rose: 'border-rose-800 text-rose-800 hover:bg-rose-800 hover:border-rose-800',
        fuchsia: 'border-fuchsia-800 text-fuchsia-800 hover:bg-fuchsia-800 hover:border-fuchsia-800',
        emerald: 'border-emerald-800 text-emerald-800 hover:bg-emerald-800 hover:border-emerald-800',
        sapphire: 'border-sapphire-800 text-sapphire-800 hover:bg-sapphire-800 hover:border-sapphire-800',
        // Add more variants as needed
    };

    // Apply the variant classes based on the prop
    const buttonClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.gray} hover:text-white focus:outline-none`;

    return (
        <button
            onClick={onClick}
            className={buttonClasses}
        >
            <div className="text-lg">{children}</div>
            <div
                className="ease-in duration-300 opacity-0 group-hover:block group-hover:opacity-100 transition-all"
            >
                <div
                    className="ease-in-out duration-500 -translate-y-4 pointer-events-none transition-all group-hover:-translate-y-12 absolute left-1/2 z-50 flex -translate-x-1/2 flex-col items-center rounded-sm text-center text-sm text-slate-300 before:-top-2"
                >
                    <div className="rounded-md bg-gray-800 py-1 px-2">
                        <p className="whitespace-nowrap">{tooltip}</p>
                    </div>
                    <div
                        className="h-0 w-fit border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-800"
                    ></div>
                </div>
            </div>
        </button>
    );
};

export default IconButton;
