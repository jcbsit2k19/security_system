import React, { useState } from 'react';

export default function TextBox({ value, placeholder, label, required, type, name, id, onChange = () => { }, icon }) {
    const [errorMessage, setErrorMessage] = useState('');

    const handleInvalid = (e) => {
        e.preventDefault(); // Prevents the default popup

        // Check if it's an email field and set a custom error message
        if (type === 'email' && e.target.value) {
            setErrorMessage('Please enter a valid email address.');
        } else {
            setErrorMessage(`${label ?? "This field"} is required.`);
        }
    };

    const handleInput = (e) => {
        setErrorMessage(''); // Clears the error message when typing
        onChange(e.target.value); // Calls the onChange prop
    };

    const handleBlur = (e) => {
        // Check for email validity
        if (type === 'email' && !e.target.validity.valid) {
            setErrorMessage('Please enter a valid email address.');
        }
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
                {type === 'textarea' ? (
                    <textarea
                        placeholder={placeholder}
                        className="p-4 text-sm w-full outline-none text-slate-600"
                        required={required}
                        name={name}
                        id={id}
                        value={value}
                        onInvalid={handleInvalid}
                        onInput={handleInput}
                        onBlur={handleBlur}
                        rows={10}
                    />
                ) : (
                    <input
                        placeholder={placeholder}
                        className="p-4 text-sm w-full outline-none text-slate-600"
                        required={required}
                        type={type}
                        name={name}
                        id={id}
                        value={value}
                        onInvalid={handleInvalid}
                        onInput={handleInput}
                        onBlur={handleBlur}
                    />
                )}

            </div>
            {errorMessage && (
                <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
            )}
        </div>
    );
}
