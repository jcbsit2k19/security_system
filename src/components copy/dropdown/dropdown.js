import React, { useState } from 'react';

export default function DropDown({ value, options = [], placeholder, label, required, name, id, onChange = () => { }, icon }) {
    const [errorMessage, setErrorMessage] = useState('');

    const handleInvalid = (e) => {
        e.preventDefault(); // Prevent the default popup
        setErrorMessage(`${label ?? "This field"} is required.`);
    };

    const handleChange = (e) => {
        setErrorMessage(''); // Clear the error message when a valid option is selected
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
            <div className={`border rounded-md overflow-hidden flex pr-2 ${errorMessage ? 'border-red-500' : 'border-gray-300'}`}>
                {icon && (
                    <div className='text-2xl text-gray-500 px-4 flex justify-center items-center border-r'>
                        {icon}
                    </div>
                )}
                <select
                    className="p-4 text-sm w-full outline-none text-slate-600 bg-white"
                    required={required}
                    name={name}
                    id={id}
                    value={value}
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                >
                    <option value="" disabled>{`Select ${placeholder}`}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            {errorMessage && (
                <p className="text-red-500 text-xs mt-1">{errorMessage}</p>
            )}
        </div>
    );
}
