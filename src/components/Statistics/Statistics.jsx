import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const assignment = [
        { name: 'New year website', mark: 58 },
        { name: 'Responsive website', mark: 58 },
        { name: 'Responsive landing page', mark: 58 },
        { name: 'JavaScript', mark: 58 },
        { name: 'Geometry genius', mark: 58 },
        { name: 'Ai-universe', mark: 48 },
        { name: 'Quiz-Hero', mark: 59 },
        { name: 'Knowledge-cafe', mark: 58 },
    ];
    return (
        <div>
            <div>
                <p className='py-24 text-center text-3xl font-bold bg-cyan-50 px-5'>Statistics</p>
            </div>

            <div className='ms-10 mt-24'>
                <AreaChart width={1600} height={400} data={assignment}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area dataKey="mark" />
                </AreaChart>
            </div>

        </div>
    );
};

export default Statistics;