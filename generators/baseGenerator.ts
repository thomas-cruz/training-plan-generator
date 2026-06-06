import {
  PlanType,
  TrainingDay,
  TrainingPlan,
  TrainingWeek,
  UserInput,
} from "@/types/training";

import {
  PLAN_DEFINITIONS,
} from "@/types/plans";

import {
  buildProgression,
} from "./utils";

export abstract class BaseGenerator {

  protected createProgression(
    planType: PlanType,
    user: UserInput
  ): number[] {

    const config =
      PLAN_DEFINITIONS[planType];

    return buildProgression(
      user.weeklyVolume,
      config.totalWeeks,
      config.weeklyIncreasePercent,
      config.recoveryWeekFrequency,
      config.recoveryWeekMultiplier
    );
  }

  protected createBasePlan(
    planType: PlanType,
    title: string,
    description: string,
    progression: number[],
    volumeUnit: "km" | "hours"
  ): TrainingPlan {

    return {
      id: crypto.randomUUID(),

      planType,

      title,

      description,

      totalWeeks:
        progression.length,

      totalDurationDays:
        progression.length * 7,

      recommendedStartTime:
        "Immediately",

      weeks: [],

      progressMetrics:
        progression.map(
          (volume, index) => ({
            weekNumber: index + 1,
            targetVolume: volume,
            volumeUnit,
          })
        ),
    };
  }

  protected createWeek(
    weekNumber: number,
    targetVolume: number,
    volumeUnit: "km" | "hours",
    days: TrainingDay[],
    recoveryInstructions?: string
  ): TrainingWeek {

    return {
      weekNumber,

      targetVolume,

      volumeUnit,

      days,

      notes:recoveryInstructions,
    };
  }

  protected scheduleWorkout(
    dayName: string,
    workout: TrainingDay
  ): TrainingDay {
  
    return {
      ...workout,
      dayName,
    };
  }
}