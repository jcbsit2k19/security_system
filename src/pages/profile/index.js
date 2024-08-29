import React, { useState } from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { HiOutlineSearch } from "react-icons/hi";
import TextBox from '../../components/textbox/textbox';

const activityData = [
    { name: 'Jan', scans: 10, accesses: 5, alerts: 3, tasks: 7 },
    { name: 'Feb', scans: 12, accesses: 8, alerts: 4, tasks: 9 },
    { name: 'Mar', scans: 15, accesses: 12, alerts: 5, tasks: 10 },
    { name: 'Apr', scans: 14, accesses: 11, alerts: 6, tasks: 11 },
    { name: 'May', scans: 20, accesses: 14, alerts: 7, tasks: 13 },
    { name: 'Jun', scans: 18, accesses: 13, alerts: 8, tasks: 12 },
    { name: 'Jul', scans: 22, accesses: 16, alerts: 9, tasks: 14 },
    { name: 'Aug', scans: 25, accesses: 18, alerts: 10, tasks: 15 },
    { name: 'Sep', scans: 27, accesses: 20, alerts: 11, tasks: 17 },
    { name: 'Oct', scans: 30, accesses: 22, alerts: 12, tasks: 18 },
    { name: 'Nov', scans: 32, accesses: 24, alerts: 13, tasks: 19 },
    { name: 'Dec', scans: 35, accesses: 26, alerts: 14, tasks: 21 },
];

export default function ProfilePage() {
    const [search, setSearch] = useState(null);
    return (
        <div className="p-6">
            <div className="container mx-auto">
                <div className="mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                        <h4 className="text-lg font-medium text-gray-700">Search Profile</h4>
                        <TextBox
                            id={"search-profile"}
                            name={"search-profile"}
                            type={"text"}
                            placeholder={"Search"}
                            value={search}
                            icon={<HiOutlineSearch />}
                            onChange={value => setSearch(value)}
                            required

                        />
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4mb-6">
                    <div className="flex items-center space-x-4">
                        <img
                            src="https://via.placeholder.com/100"
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full border border-gray-300"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
                            <p className="text-gray-600">johndoe@example.com</p>
                            <p className="text-gray-600">Joined: January 2023</p>
                            <p className="text-gray-600">Role: Security Officer</p>
                            <p className="text-gray-600">Last Login: August 28, 2024</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                                <h4 className="text-lg font-medium text-gray-700">ID Card Number</h4>
                                <p className="text-xl font-bold text-gray-800">1234567890</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                                <h4 className="text-lg font-medium text-gray-700">Company Name</h4>
                                <p className="text-xl font-bold text-gray-800">Turnstyle Inc.</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                                <h4 className="text-lg font-medium text-gray-700">Contact Number</h4>
                                <p className="text-xl font-bold text-gray-800">+1 (555) 123-4567</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                                <h4 className="text-lg font-medium text-gray-700">Department</h4>
                                <p className="text-xl font-bold text-gray-800">Security</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                                <h4 className="text-lg font-medium text-gray-700">Office Location</h4>
                                <p className="text-xl font-bold text-gray-800">Building A, Floor 3</p>
                            </div>
                            <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                                <h4 className="text-lg font-medium text-gray-700">Emergency Contact</h4>
                                <p className="text-xl font-bold text-gray-800">Jane Doe (+1 555 765-4321)</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-4">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className='bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500'>
                            <h4 className="text-lg font-medium text-gray-700">Total Scans</h4>
                            <p className="text-2xl font-bold text-blue-500">1,234</p>
                        </div>
                        <div className='bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500'>
                            <h4 className="text-lg font-medium text-gray-700">Active Accesses</h4>
                            <p className="text-2xl font-bold text-green-500">567</p>
                        </div>
                        <div className='bg-white p-4 rounded-lg shadow-md border-l-4 border-red-500'>
                            <h4 className="text-lg font-medium text-gray-700">Total Alerts</h4>
                            <p className="text-2xl font-bold text-red-500">45</p>
                        </div>
                        <div className='bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500'>
                            <h4 className="text-lg font-medium text-gray-700">Completed Tasks</h4>
                            <p className="text-2xl font-bold text-yellow-500">123</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md col-span-2 mt-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Activity Overview</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <AreaChart data={activityData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="scans" stroke="#3B82F6" fillOpacity={0.3} fill="#3B82F6" name="Total Scan" />
                            <Area type="monotone" dataKey="accesses" stroke="#10B981" fillOpacity={0.3} fill="#10B981" name="Active Accesses" />
                            <Area type="monotone" dataKey="alerts" stroke="#EF4444" fillOpacity={0.3} fill="#EF4444" name="Total Alerts" />
                            <Area type="monotone" dataKey="tasks" stroke="#F59E0B" fillOpacity={0.3} fill="#F59E0B" name="Completed Tasks" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">Recent Alerts</h3>
                        <div className="text-sm text-gray-600 mt-2">
                            <p>- Alert 1: Unauthorized scan attempt.</p>
                            <p>- Alert 2: Access granted to restricted area.</p>
                            <p>- Alert 3: System maintenance scheduled.</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">Recent Access Logs</h3>
                        <ul className="text-sm text-gray-600 mt-2 space-y-2">
                            <li>- User John Doe accessed Turnstyle system at 10:34 AM.</li>
                            <li>- User Jane Smith scanned at restricted area at 11:20 AM.</li>
                            <li>- System update completed at 1:15 PM.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
