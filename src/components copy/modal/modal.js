import React, { useEffect, useState, useRef } from 'react';
import RotatingLinesLoader from '../spinner/rotating_lines';

export default function Modal({ isOpen, onClose, children, title = "Add Title", loading = false, maxWidth = 'max-w-5xl' }) {
    const [visible, setVisible] = useState(false);
    const [animate, setAnimate] = useState(false);
    const [scaleUp, setScaleUp] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
            setTimeout(() => setAnimate(true), 10); // Short delay to ensure the modal is rendered before starting animation
        } else {
            setAnimate(false);
            setTimeout(() => setVisible(false), 300); // Delay to allow close animation to complete
        }
    }, [isOpen]);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setScaleUp(true);
            setTimeout(() => setScaleUp(false), 300); // Scale up and return to original size
        }
    };

    return (
        visible && (
            <div
                className={`fixed inset-0 z-50 p-8 overflow-y-auto bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleOutsideClick}
            >
                <div
                    ref={modalRef}
                    className={`overflow-hidden relative w-full mx-auto bg-white rounded-lg shadow-lg transform transition-transform duration-300 ${animate ? 'scale-100' : 'scale-95'} ${scaleUp ? 'scale-105' : ''} ` + maxWidth}
                >
                    <div className='w-full h-12 bg-green-700 flex items-center pl-4'>
                        <h1 className='text-xl text-white font-semibold tracking-wide flex-1'>{title}</h1>
                        <button
                            className="text-2xl flex items-center h-full justify-center w-10 font-bold text-white hover:text-3xl hover:text-red-500
                            transition ease-in delay-75"
                            onClick={onClose}
                        >
                            &times;
                        </button>
                    </div>

                    <div className="p-8 relative">
                        {loading && (
                            <div className="absolute inset-0 bg-gray-100 bg-opacity-75 flex justify-center items-center">
                                <div className="loader"><RotatingLinesLoader size='55' /></div>
                            </div>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        )
    );
};
