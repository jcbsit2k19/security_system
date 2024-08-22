import React from 'react';


export default function TextBox({ value, placeholder, required, type, name, id, onChange = () => { }, icon }) {
    return (
        <div className='border rounded-md overflow-hidden flex'>
            {icon &&
                (<div className='text-2xl text-gray-500 px-4 flex justify-center items-center border-r'>
                    {icon}
                </div>)}
            <input
                placeholder={placeholder}
                className="p-4 text-sm w-full outline-none"
                required={required}
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}
