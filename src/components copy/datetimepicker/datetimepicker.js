import React, { useState } from 'react';

export default function DateTimePicker({ value, label, required, name, id, type = "datetime-local", onChange = () => { }, icon }) {
    const [errorMessage, setErrorMessage] = useState('');

    const handleInvalid = (e) => {
        e.preventDefault(); // Prevent the default popup
        setErrorMessage(`${label ?? "This field"} is required.`);
    };

    const handleInput = (e) => {
        setErrorMessage(''); // Clear the error message when typing
        onChange(e.target.value); // Call the onChange handler
    };

    return (
        <div>
            {label &&
                <h3 className='text-sm font-medium text-gray-700'>
                    {label}
                    {required && <span className="text-red-500 font-semibold ml-1">*</span>}
                </h3>
            }
            <div className={`border rounded-md overflow-hidden flex ${errorMessage ? 'border-red-500' : 'border-gray-300'}`}>
                {icon && (
                    <div className='text-2xl text-gray-500 px-4 flex justify-center items-center border-r'>
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    className="p-4 text-sm w-full outline-none text-slate-600"
                    required={required}
                    name={name}
                    id={id}
                    value={value}
                    onChange={handleInput}
                    onInvalid={handleInvalid}
                />
            </div>
            {errorMessage && (
                <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
            )}
        </div>
    );
}
