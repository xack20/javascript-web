import "./styles.css";
import React from "react";
import { ResponsiveContainer, PieChart, Cell, Pie } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group C", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function PiChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
        <Pie
        data={data}
        
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={3}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`}  fill={COLORS[index % COLORS.length]} label />
        ))}
      </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}