import React from "react";
import {
    Area, AreaChart, CartesianGrid,
    Tooltip, XAxis, ResponsiveContainer,
    YAxis
} from "recharts";

const data = [
    {
        name: "2010",
        Total_Sales: 800,
        Total_Revenue: 2400,
        amt: 2400
    },
    {
        name: "2012",
        Total_Sales: 4000,
        Total_Revenue: 1398,
        amt: 2210
    },
    {
        name: "2014",
        Total_Sales: 1900,
        Total_Revenue: 9800,
        amt: 2290
    },
    {
        name: "2016",
        Total_Sales: 2780,
        Total_Revenue: 3908,
        amt: 2000
    },
    {
        name: "2018",
        Total_Sales: 1890,
        Total_Revenue: 4500,
        amt: 2181
    },
    {
        name: "2020",
        Total_Sales: 3000,
        Total_Revenue: 4500,
        amt: 2500
    },
    {
        name: "2021",
        Total_Sales: 4000,
        Total_Revenue: 7000,
        amt: 2000
    }
];

export default function BiLineChart() {
    return (
        <div style={{ width: '100%', height: 300 }}>


            <ResponsiveContainer>

                <AreaChart width={"100%"} height={"100%"} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="1 1" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total_Sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="Total_Revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>

        </div>
    );
}
