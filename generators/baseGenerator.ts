import {
    TrainingPlan,
    UserInput,
    PlanType,
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
    ) {
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
      progression: number[]
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
  
        weeklySchedule: [],
  
        workouts: [],
  
        progressMetrics:
          progression.map(
            (volume, index) => [
              index + 1,
              volume,
            ]
          ),
  
        recoveryInstructions: [],
      };
    }
  }