import React from 'react';
import Button from '../button/button';
import { FaSave } from 'react-icons/fa';
import { ImCancelCircle } from "react-icons/im";

export default function Form({ children, onSubmit, onCancel }) {
    return (
        <form onSubmit={onSubmit} className='space-y-4'>
            {children}
            <p className="text-sm text-gray-600 italic py-2">All fields marked with <span className="text-red-500 font-semibold">*</span> are required.</p>
            <div className='flex justify-end space-x-4 pt-4'>
                <Button normalWidth type={"submit"} variant='save' icon={<FaSave />}>Save</Button>
                <Button normalWidth type={"button"} variant='cancel' icon={<ImCancelCircle />} onClick={() => { if (onCancel) onCancel(); }}>Cancel</Button>
            </div>
        </form>
    );
}
