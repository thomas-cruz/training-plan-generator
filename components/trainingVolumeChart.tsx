"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  ProgressMetric,
} from "@/types/training";

interface Props {
  progressMetrics: ProgressMetric[];
}

export default function TrainingVolumeChart({
  progressMetrics,
}: Props) {

  const volumeUnit =
    progressMetrics[0]?.volumeUnit ??
    "km";

  return (
    <div className="h-72 w-full">

      <ResponsiveContainer>

        <LineChart
          data={progressMetrics}
        >

          <XAxis
            dataKey="weekNumber"
          />

          <YAxis
            label={{
              value: volumeUnit,
              angle: -90,
              position: "insideLeft",
            }}
          />

          <Tooltip
            formatter={(
              value,
              _name,
              props
            ) => [
              `${value} ${props.payload.volumeUnit}`,
              "Volume",
            ]}
          />

          <Line
            type="monotone"
            dataKey="targetVolume"
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}