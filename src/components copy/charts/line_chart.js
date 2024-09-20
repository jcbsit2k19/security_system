import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function CustomLineChart({ data, displayData, header }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">{header}</h3>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width={60} tick={5} orientation="left" />
                    <Tooltip />
                    <Legend />
                    {displayData.map((item, index) => (
                        <Line
                            key={index}
                            type="monotone"
                            dataKey={item.dataKey}
                            stroke={item.color}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
