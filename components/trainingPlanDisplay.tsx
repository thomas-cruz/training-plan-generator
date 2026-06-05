"use client";

import {
    TrainingPlan,
} from "@/types/training";

import TrainingVolumeChart
    from "./trainingVolumeChart";

import {
    formatWeek,
} from "./planFormatter";

interface Props {
    plan: TrainingPlan;
}

export default function TrainingPlanDisplay({
    plan,
}: Props) {
    return (
        <div className="mt-8 space-y-8">

            <div className="bg-white rounded-lg shadow p-6">

                <h2 className="text-2xl font-bold">
                    {plan.title}
                </h2>

                <p className="text-gray-600 mt-2">
                    {plan.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mt-6">

                    <div>
                        <div className="text-sm text-gray-500">
                            Duration
                        </div>

                        <div className="font-semibold">
                            {plan.totalWeeks} weeks
                        </div>
                    </div>

                    <div>
                        <div className="text-sm text-gray-500">
                            Total Days
                        </div>

                        <div className="font-semibold">
                            {plan.totalDurationDays}
                        </div>
                    </div>

                    <div>
                        <div className="text-sm text-gray-500">
                            Recommended Start
                        </div>

                        <div className="font-semibold">
                            {plan.recommendedStartTime}
                        </div>
                    </div>

                </div>

            </div>

            <div className="bg-white rounded-lg shadow p-6">

                <h3 className="text-xl font-semibold mb-4">
                    Training Volume Progression
                </h3>

                <TrainingVolumeChart
                    progressMetrics={
                        plan.progressMetrics
                    }
                />

            </div>

            <div className="bg-white rounded-lg shadow p-6">

                <h3 className="text-xl font-semibold mb-4">
                    Weekly Progression
                </h3>

                <div className="overflow-x-auto">

                    <table className="w-full border-collapse">

                        <thead>

                            <tr className="bg-gray-100">

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
                                ([week, volume]) => (
                                    <tr key={week}>

                                        <td className="border p-2">
                                            Week {week}
                                        </td>

                                        <td className="border p-2">
                                            {volume}
                                        </td>

                                    </tr>
                                )
                            )}

                        </tbody>

                    </table>

                </div>

            </div>

            <div className="bg-white rounded-lg shadow p-6">

                <h3 className="text-xl font-semibold mb-4">
                    Weekly Schedule
                </h3>

                <div className="space-y-4">

                    {plan.weeklySchedule.map(
                        (
                            week,
                            weekIndex
                        ) => (
                            <div
                                key={weekIndex}
                                className="
                  border
                  rounded-lg
                  p-4
                "
                            >

                                <h4 className="font-semibold">
                                    Week {weekIndex + 1}
                                </h4>

                                <div className="flex flex-wrap gap-2 mt-3">

                                    {formatWeek(
                                        plan.planType,
                                        week
                                    ).map(
                                        (
                                            workout,
                                            workoutIndex
                                        ) => (
                                            <div
                                                key={workoutIndex}
                                                className="
                                                    border
                                                    rounded
                                                    p-3
                                                    bg-gray-50  
                                                "
                                            >
                                                <div className="font-medium">
                                                    {workout.day}
                                                </div>

                                                <div>
                                                    {workout.title}
                                                </div>

                                                <div className="text-sm text-gray-600">
                                                    {workout.description}
                                                </div>
                                            </div>
                                        )
                                    )}

                                </div>

                            </div>
                        )
                    )}

                </div>

            </div>

            {plan.recoveryInstructions
                .length > 0 && (

                    <div className="bg-white rounded-lg shadow p-6">

                        <h3 className="text-xl font-semibold mb-4">
                            Recovery Notes
                        </h3>

                        <div className="space-y-3">

                            {plan.recoveryInstructions.map(
                                (
                                    instruction,
                                    index
                                ) => {
                                    const week =
                                        Object.keys(
                                            instruction
                                        )[0];

                                    const note =
                                        instruction[
                                        Number(week)
                                        ];

                                    return (
                                        <div
                                            key={index}
                                            className="
                      border-l-4
                      pl-4
                    "
                                        >
                                            <div className="font-medium">
                                                Week {week}
                                            </div>

                                            <div>
                                                {note}
                                            </div>
                                        </div>
                                    );
                                }
                            )}

                        </div>

                    </div>

                )}

        </div>
    );
}