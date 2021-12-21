import React from 'react';
import { Bar, BarChart,CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
  

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  }
];

export default function BiBarChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>

    <ResponsiveContainer>
    <BarChart
      width={"100%"}
      height={"100%"}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="1 1" />
      <XAxis dataKey="name" />
      <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
      <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
      <Tooltip />
      <Legend />
      <Bar yAxisId="left" dataKey="pv" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="uv" fill="#82ca9d" />
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
