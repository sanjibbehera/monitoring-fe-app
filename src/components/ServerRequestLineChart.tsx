import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ServerRequestDataPoint {
  time: string;
  requests1: number;
  requests2: number;
}

const ServerRequestsLineChart: React.FC = () => {
  const data: ServerRequestDataPoint[] = [
    { time: "0", requests1: 20, requests2: 50 },
    { time: "1", requests1: 30, requests2: 25 },
    { time: "2", requests1: 90, requests2: 45 },
    { time: "3", requests1: 50, requests2: 55 },
    { time: "4", requests1: 60, requests2: 65 },
    { time: "5", requests1: 70, requests2: 75 },
    { time: "6", requests1: 40, requests2: 95 },
    { time: "7", requests1: 90, requests2: 95 },
    { time: "8", requests1: 10, requests2: 105 },
    { time: "9", requests1: 100, requests2: 105 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="requests1"
          stroke="green"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="requests2"
          stroke="red"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ServerRequestsLineChart;
