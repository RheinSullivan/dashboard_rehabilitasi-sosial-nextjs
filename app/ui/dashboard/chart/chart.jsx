"use client";

import styles from "./chart.module.css";
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Min",
    Visit: 4000,
    Click: 2400,
  },
  {
    name: "Sen",
    Visit: 3000,
    Click: 1398,
  },
  {
    name: "Sel",
    Visit: 2000,
    Click: 3800,
  },
  {
    name: "Rab",
    Visit: 2780,
    Click: 3908,
  },
  {
    name: "Kam",
    Visit: 1890,
    Click: 4800,
  },
  {
    name: "Jum",
    Visit: 2390,
    Click: 3800,
  },
  {
    name: "Sab",
    Visit: 3490,
    Click: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Rekap Mingguan</h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis dy="1em" />
          <Tooltip contentStyle={{ background: "#d3d5d8", borderRadius: "10px", border: "none" }} />
          <Legend />
          <Line type="monotone" dataKey="Visit" stroke="#84cc16" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Click" stroke="#0284c7" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
