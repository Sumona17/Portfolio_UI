import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";

const data = [
  { price: 24.8, low: 0.1 },
  { price: 25.5, low: 0.5 },
  { price: 26.3, low: 1 },
  { price: 26.6, medium: 2 },
  { price: 27.3, medium: 1.5, low: 0.6 },
  { price: 28.2, high: 1.5, medium: 1 },
  { price: 29.0, high: 1.8, medium: 0.6 },
  { price: 30.2, high: 1 },
  { price: 30.3, high: 0.5, medium: 0.2 },
  { price: 31.8, medium: 0.1 },
  { price: 32.3, high: 0.1 }
];

const WhatIf = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h3 style={{ textAlign: "center" }}>Profit Scenarios</h3>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="lowColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34a853" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#34a853" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="mediumColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1a73e8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#1a73e8" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="highColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#673ab7" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#673ab7" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="price"
            tickFormatter={(value) => `$${value.toFixed(1)}k`}
          />
          <YAxis />
          <Tooltip formatter={(value) => value.toFixed(2)} />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />

          <Area
            type="monotone"
            dataKey="low"
            stroke="#34a853"
            fillOpacity={1}
            fill="url(#lowColor)"
            name="Profit (Low Price Scenario)"
          />
          <Area
            type="monotone"
            dataKey="medium"
            stroke="#1a73e8"
            fillOpacity={1}
            fill="url(#mediumColor)"
            name="Profit (Medium Price Scenario)"
          />
          <Area
            type="monotone"
            dataKey="high"
            stroke="#673ab7"
            fillOpacity={1}
            fill="url(#highColor)"
            name="Profit (High Price Scenario)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div style={{ padding: "1rem", textAlign: "center", fontSize: 14 }}>
        <p><b>Range:</b> $25.3k – $31.8k</p>
        <p><b>Mean:</b> Low: $26.3k, Medium: $30.3k, High: $28.2k</p>
      </div>
    </div>
  );
};

export default WhatIf;
