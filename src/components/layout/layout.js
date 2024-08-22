import React, { useState } from 'react';
import { FaTachometerAlt, FaUser, FaChartBar } from 'react-icons/fa'; // Importing icons from react-icons
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

export default function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('Dashboard'); // State to track active navigation item

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleNavClick = (navItem) => {
        setActiveNav(navItem);
    };

    return (
        <div className='h-screen flex'>
            {/* Sidebar */}
            <div
                className={`z-50 fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-blue-700 to-blue-500 p-4 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
            >
                <div className='text-white mb-4'>
                    {/* User Profile */}
                    <div className='flex items-center space-x-4 mb-4 h-20 justify-center'>
                        <h1 className='text-2xl font-semibold'>AppName</h1>
                    </div>

                    {/* Menu Items */}
                    <nav>
                        <ul className='space-y-4'>
                            <li
                                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-300 ${activeNav === 'Dashboard' ? 'font-semibold' : ''
                                    }`}
                                onClick={() => handleNavClick('Dashboard')}
                            >
                                <FaTachometerAlt />
                                <span>Dashboard</span>
                            </li>
                            <li
                                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-300 ${activeNav === 'Profiles' ? 'font-semibold' : ''
                                    }`}
                                onClick={() => handleNavClick('Profiles')}
                            >
                                <FaUser />
                                <span>Profiles</span>
                            </li>
                            <li
                                className={`flex items-center space-x-2 cursor-pointer hover:text-blue-300 ${activeNav === 'Reports' ? 'font-semibold' : ''
                                    }`}
                                onClick={() => handleNavClick('Reports')}
                            >
                                <FaChartBar />
                                <span>Reports</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Main content area */}
            <div className='flex-1 flex flex-col overflow-y-auto'>
                {/* Top bar with toggle button */}
                <div className='min-h-20 shadow-md sticky flex items-center p-4 bg-white top-0 z-10'>
                    <div className='flex-1'>
                        <button
                            onClick={toggleSidebar}
                            className='md:hidden text-gray-700 text-4xl focus:outline-none'
                        >
                            <HiOutlineMenuAlt2 />

                        </button>
                    </div>

                    <div className='flex space-x-2 cursor-pointer'>
                        <div
                            className='w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-2xl flex justify-center items-center'
                        >
                            J
                        </div>

                        <div>
                            <h2 className='text-lg font-semibold'>John Christian Alvarez</h2>
                            <p className='text-sm'>johnchristianalvarezbsit2k19@gmail.com</p>
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
                    className='fixed inset-0 bg-black opacity-50 md:hidden'
                    onClick={toggleSidebar}
                ></div>
            )}
        </div>
    );
}
