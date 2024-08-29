import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample Data
const monthlyData = [
    { name: 'Jan', online: 400, offline: 352, alerts: 5 },
    { name: 'Feb', online: 300, offline: 139, alerts: 3 },
    { name: 'Mar', online: 200, offline: 980, alerts: 4 },
    { name: 'Apr', online: 278, offline: 390, alerts: 6 },
    { name: 'May', online: 189, offline: 480, alerts: 2 },
    { name: 'Jun', online: 239, offline: 380, alerts: 7 },
    { name: 'Jul', online: 349, offline: 529, alerts: 8 },
    { name: 'Aug', online: 532, offline: 678, alerts: 5 },
    { name: 'Sep', online: 439, offline: 908, alerts: 6 },
    { name: 'Oct', online: 765, offline: 345, alerts: 9 },
    { name: 'Nov', online: 321, offline: 557, alerts: 3 },
    { name: 'Dec', online: 223, offline: 342, alerts: 4 }
];

const dailyData = [
    { name: '01', online: 50, offline: 30, alerts: 1 },
    { name: '02', online: 70, offline: 45, alerts: 2 },
    { name: '03', online: 90, offline: 55, alerts: 0 },
    { name: '04', online: 120, offline: 60, alerts: 3 },
    { name: '05', online: 100, offline: 50, alerts: 1 },
    { name: '06', online: 130, offline: 70, alerts: 4 },
    { name: '07', online: 140, offline: 80, alerts: 2 },
    { name: '08', online: 160, offline: 90, alerts: 3 },
    { name: '09', online: 180, offline: 100, alerts: 0 },
    { name: '10', online: 200, offline: 110, alerts: 5 },
    { name: '11', online: 220, offline: 120, alerts: 2 },
    { name: '12', online: 250, offline: 130, alerts: 6 }
];

const yearlyData = [
    { name: '2020', online: 3000, offline: 2500, alerts: 30 },
    { name: '2021', online: 3500, offline: 2700, alerts: 25 },
    { name: '2022', online: 4000, offline: 2900, alerts: 40 },
    { name: '2023', online: 4500, offline: 3100, alerts: 35 }
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
                    <div className='bg-white p-4 rounded-lg shadow-md border-l-4 border-green-500'>
                        <h3 className='text-lg font-semibold text-gray-700'>Currently Onsite</h3>
                        <p className='text-2xl font-bold text-green-500'>1,234</p>
                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md col-span-2 mt-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">User Activity (Monthly)</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="online" stroke="#34D399" />
                            <Line type="monotone" dataKey="offline" stroke="#60A5FA" />
                            <Line type="monotone" dataKey="alerts" stroke="#F87171" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md col-span-2 mt-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">User Activity (Daily)</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={dailyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="online" stroke="#34D399" />
                            <Line type="monotone" dataKey="offline" stroke="#60A5FA" />
                            <Line type="monotone" dataKey="alerts" stroke="#F87171" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md col-span-2 mt-6">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">User Activity (Yearly)</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={yearlyData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="online" stroke="#34D399" />
                            <Line type="monotone" dataKey="offline" stroke="#60A5FA" />
                            <Line type="monotone" dataKey="alerts" stroke="#F87171" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-700">Security Alerts</h3>
                        <div className="text-sm text-gray-600 mt-2">
                            <ul className="text-sm text-gray-600 mt-2 space-y-2">
                                <li>- Unauthorized Access at 10:34 AM.</li>
                                <li>- Failed Login at 11:20 AM.</li>
                                <li>- Blocked User at 1:15 PM.</li>
                            </ul>
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
}
