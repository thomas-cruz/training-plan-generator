"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Props {
  progressMetrics: number[][];
}

export default function TrainingVolumeChart({
  progressMetrics,
}: Props) {
  const chartData = progressMetrics.map(
    ([week, volume]) => ({
      week,
      volume,
    })
  );

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <LineChart data={chartData}>
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="volume"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}