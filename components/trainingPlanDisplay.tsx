"use client";

import {
    TrainingPlan,
} from "@/types/training";

import TrainingVolumeChart
    from "./trainingVolumeChart";

import {
    formatWorkout,
} from "./planFormatter";

interface Props {
    plan: TrainingPlan;
}

export default function TrainingPlanDisplay({
    plan,
}: Props) {
    return (
        <div className="mt-8 space-y-8">

            <div className="bg-gray-800 rounded-lg shadow p-6">

                <h2 className="text-2xl font-bold">
                    {plan.title}
                </h2>

                <p className=" mt-2">
                    {plan.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mt-6">

                    <div>
                        <div className="text-sm ">
                            Duration
                        </div>

                        <div className="font-semibold">
                            {plan.totalWeeks} weeks
                        </div>
                    </div>

                    <div>
                        <div className="text-sm ">
                            Total Days
                        </div>

                        <div className="font-semibold">
                            {plan.totalDurationDays}
                        </div>
                    </div>

                    <div>
                        <div className="text-sm ">
                            Recommended Start
                        </div>

                        <div className="font-semibold">
                            {plan.recommendedStartTime}
                        </div>
                    </div>

                </div>

            </div>

            <div className="bg-gray-800 rounded-lg shadow p-6">

                <h3 className="text-xl font-semibold mb-4">
                    Training Volume Progression
                </h3>

                <TrainingVolumeChart
                    progressMetrics={
                        plan.progressMetrics
                    }
                />

            </div>

            <div className="bg-gray-800 rounded-lg shadow p-6">

                <h3 className="text-xl font-semibold mb-4">
                    Weekly Progression
                </h3>

                <div className="overflow-x-auto">

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-gray-900">

                                <th className="border p-2 text-left">
                                    Week
                                </th>

                                <th className="border p-2 text-left">
                                    Target Volume
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {plan.progressMetrics.map(
                                (metric) => (
                                    <tr key={metric.weekNumber}>
                                        <td className="border p-2">
                                            Week {metric.weekNumber}
                                        </td>

                                        <td className="border p-2">
                                            {metric.targetVolume}
                                            {" "}
                                            {metric.volumeUnit}
                                        </td>
                                    </tr>
                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

            <div className="bg-gray-800 rounded-lg shadow p-6">

                <h3 className="text-xl font-semibold mb-4">
                    Weekly Schedule
                </h3>

                <div className="space-y-4">

                    {plan.weeks.map(
                        (week) => (
                            <div
                                key={week.weekNumber}
                                className="
        border
        rounded-lg
        p-4
      "
                            >

                                <div
                                    className="
          flex
          justify-between
          mb-4
        "
                                >

                                    <h4 className="font-semibold">
                                        Week {week.weekNumber}
                                    </h4>

                                    <span
                                        className="
            text-sm
            bg-gray-900
            px-2
            py-1
            rounded
          "
                                    >
                                        {week.targetVolume}
                                        {" "}
                                        {week.volumeUnit}
                                    </span>

                                </div>

                                <div className="space-y-2">

                                    {week.days.map(
                                        (
                                            workout,
                                            workoutIndex
                                        ) => {

                                            const display =
                                                formatWorkout(
                                                    workout
                                                );

                                            return (
                                                <div
                                                    key={workoutIndex}
                                                    className="
                  border
                  rounded
                  p-3
                  bg-gray-600
                "
                                                >

                                                    <div className="font-medium">
                                                        {display.day}
                                                    </div>

                                                    <div>
                                                        {display.title}
                                                    </div>

                                                    <div className="text-sm">
                                                        {display.description}
                                                    </div>

                                                    <div className="text-xs ">
                                                        {display.intensity}
                                                    </div>

                                                </div>
                                            );
                                        }
                                    )}

                                </div>

                            </div>
                        )
                    )}

                </div>

            </div>

        </div>
    );
}