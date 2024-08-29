import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', online: 400, offline: 352 },
    { name: 'Feb', online: 300, offline: 139 },
    { name: 'Mar', online: 200, offline: 980 },
    { name: 'Apr', online: 278, offline: 390 },
    { name: 'May', online: 189, offline: 480 },
    { name: 'Jun', online: 239, offline: 380 },
    { name: 'Jul', online: 349, offline: 529 },
    { name: 'Aug', online: 532, offline: 678 },
    { name: 'Sep', online: 439, offline: 908 },
    { name: 'Oct', online: 765, offline: 345 },
    { name: 'Nov', online: 321, offline: 557 },
    { name: 'Dec', online: 223, offline: 342 },
];

export default function DashboardPage() {
    return (

        <div className="p-6">
            <div className="container mx-auto">
                <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                    <div className='bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500'>
                        <h3 className='text-lg font-semibold text-gray-700'>Registered Users</h3>
                        <p className='text-2xl font-bold text-blue-500'>12,389</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-md  border-l-4 border-green-500'>
                        <h3 className='text-lg font-semibold text-gray-700'>Currently Onsite</h3>
                        <p className='text-2xl font-bold text-green-500'>1,234</p>
                    </div>

                </div>
                <div className="bg-white p-4 rounded-lg shadow-md col-span-2 mt-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">User Activity</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="online" stroke="#34D399" />
                            <Line type="monotone" dataKey="offline" stroke="#60A5FA" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">Security Alerts</h3>
                        <div className="text-sm text-gray-600 mt-2">
                            <p>- Alert 1: Unauthorized access attempt.</p>
                            <p>- Alert 2: System health check.</p>
                            <p>- Alert 3: Update required.</p>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">Recent Activity</h3>
                        <ul className="text-sm text-gray-600 mt-2 space-y-2">
                            <li>- User John Doe logged in at 10:34 AM.</li>
                            <li>- User Jane Smith accessed secure file at 11:20 AM.</li>
                            <li>- System update completed at 1:15 PM.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
};

