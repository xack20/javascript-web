import React from 'react';
import { Bar, BarChart,CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
  

const data = [
  {
    name: "2005",
    Total_Income: 1000,
    Total_Outcome: 2000,
    amt: 2400
  },
  {
    name: "2010",
    Total_Income: 1500,
    Total_Outcome: 2398,
    amt: 2210
  },
  {
    name: "2015",
    Total_Income: 2000,
    Total_Outcome: 7000,
    amt: 3290
  },
  {
    name: "2020",
    Total_Income: 2580,
    Total_Outcome: 3908,
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
      <Bar yAxisId="left" dataKey="Total_Outcome" fill="#8884d8" />
      <Bar yAxisId="right" dataKey="Total_Income" fill="#82ca9d" />
    </BarChart>
    </ResponsiveContainer>
    </div>
  );
}
