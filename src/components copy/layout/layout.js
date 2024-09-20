import React, { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { FaChevronDown } from 'react-icons/fa';
import { routesData } from '../../utils/routes_data';
import { useNavigate, useLocation } from 'react-router-dom';
import Typography from '../typography/typography';
import { FaSignOutAlt } from "react-icons/fa";

export default function Layout({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    // Update activeNav based on location.pathname
    const getActiveNav = () => {
        for (const item of routesData) {
            if (item.path === location.pathname) return item.label;
            if (item.child) {
                for (const child of item.child) {
                    if (child.path === location.pathname) return child.label;
                }
            }
        }
        return '';
    };

    const [activeNav, setActiveNav] = useState(getActiveNav());

    const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

    const handleNavClick = (navItem, path, index) => {
        if (navItem.child) {
            setOpenDropdown(prev => (prev === index ? null : index));
        } else {
            setActiveNav(navItem.label); // Update activeNav here
            navigate(path);
            setIsSidebarOpen(false);
        }
    };

    return (
        <div className='h-screen flex'>
            {/* Sidebar */}
            <div
                className={`z-50 fixed inset-y-0 left-0 w-72 bg-gradient-to-b from-green-700 to-green-500 p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out overflow-y-auto custom-scrollbar`}
            >
                <div className='text-white mb-4'>
                    {/* User Profile */}
                    <div className='flex items-center mb-4 h-20 justify-center'>
                        <Typography variant='logo'><span className='text-yellow-400'>i</span><span className='text-blue-500'>NFORM</span></Typography>
                    </div>

                    {/* Menu Items */}
                    <nav>
                        <ul className='space-y-4'>
                            {routesData.map((item, index) => (
                                <li key={index}>
                                    <div
                                        className={`text-md flex items-center space-x-2 cursor-pointer hover:text-green-300 ${activeNav === item.label ? 'font-semibold' : ''}`}
                                        onClick={() => handleNavClick(item, item.path, index)}
                                    >
                                        <item.icon className='text-2xl' />
                                        <span>{item.label}</span>
                                        {item.child && (
                                            <FaChevronDown
                                                className={`ml-auto transform transition-transform duration-300 ease-in-out ${openDropdown === index ? 'rotate-180' : 'rotate-0'}`}
                                            />
                                        )}
                                    </div>
                                    {item.child && (
                                        <ul
                                            className={`mt-3 space-y-3 ml-6 overflow-hidden transition-all duration-500 ease-in-out transform ${openDropdown === index ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                                                }`}
                                        >
                                            {item.child.map((childItem, childIndex) => (
                                                <li
                                                    key={childIndex}
                                                    className={`text-sm flex items-center space-x-2 cursor-pointer hover:text-green-300 ${activeNav === childItem.label ? 'font-semibold' : ''}`}
                                                    onClick={() => {
                                                        setActiveNav(childItem.label); // Update activeNav here
                                                        navigate(childItem.path);
                                                        setIsSidebarOpen(false);
                                                    }}
                                                >
                                                    <childItem.icon className='text-xl' />
                                                    <span>{childItem.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <li>
                                <div
                                    className={`text-md flex items-center space-x-2 cursor-pointer hover:text-green-300`}
                                    onClick={() => navigate("/")}
                                >
                                    <FaSignOutAlt className='text-2xl' />
                                    <span>Signout</span>

                                </div>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Main content area */}
            <div className='flex-1 flex flex-col overflow-y-auto'>
                {/* Top bar with toggle button */}
                <div className='min-h-20 shadow-md sticky flex items-center p-4 bg-white top-0 z-10 space-x-2'>
                    <button
                        onClick={toggleSidebar}
                        className='md:hidden text-gray-700 text-2xl focus:outline-none'
                    >
                        <HiOutlineMenuAlt2 />
                    </button>
                    <div className='flex-1'>
                        <label className='text-2xl font-semibold text-gray-800'>{activeNav}</label>
                    </div>
                    <div className='flex space-x-2 cursor-pointer'>
                        <div className='w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-2xl flex justify-center items-center'>
                            J
                        </div>
                        <div className='hidden md:block'>
                            <h2 className='text-lg font-semibold'>John Doe</h2>
                            <p className='text-sm'>johndoe@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* Main content */}
                <div className='flex-1 p-4'>
                    {children}
                </div>
            </div>

            {/* Overlay for small screens when sidebar is open */}
            {isSidebarOpen && (
                <div
                    className='fixed inset-0 bg-black opacity-50 md:hidden z-40'
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}
