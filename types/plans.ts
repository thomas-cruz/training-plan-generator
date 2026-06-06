/**
 * Rule-Based Training Plan Generator
 *
 * This library contains algorithmically generated training plans based on
 * proven periodization principles and workout selection rules.
 *
 * Plans supported:
 * - Beginner 5K
 * - Beginner 10K
 * - First Half Marathon
 * - First Century Ride
 * - FTP Improvement
 */

import { PlanType, ProgressionStep } from "./training";

export interface PlanDefinition {
  planType: PlanType;
  totalWeeks: number;
  weeklyIncreasePercent: number;
  recoveryWeekFrequency: number;
  recoveryWeekMultiplier: number;
  progressionSteps: ProgressionStep[];
}

export const PLAN_DEFINITIONS: Record<PlanType, PlanDefinition> = {
  [PlanType.BEGINNER_5K]: {
    planType: PlanType.BEGINNER_5K,
    totalWeeks: 8,
    weeklyIncreasePercent: 0.10,
    recoveryWeekFrequency: 4,
    recoveryWeekMultiplier: 0.75,
    progressionSteps: [
      { weekFrom: 1, weekTo: 3, adjustmentMultiplier: 1.0 },
      { weekFrom: 4, weekTo: 4, adjustmentMultiplier: 0.75 },
      { weekFrom: 5, weekTo: 7, adjustmentMultiplier: 1.1 },
      { weekFrom: 8, weekTo: 8, adjustmentMultiplier: 0.85 },
    ],
  },

  [PlanType.BEGINNER_10K]: {
    planType: PlanType.BEGINNER_10K,
    totalWeeks: 10,
    weeklyIncreasePercent: 0.10,
    recoveryWeekFrequency: 4,
    recoveryWeekMultiplier: 0.75,
    progressionSteps: [
      { weekFrom: 1, weekTo: 3, adjustmentMultiplier: 1.0 },
      { weekFrom: 4, weekTo: 4, adjustmentMultiplier: 0.75 },
      { weekFrom: 5, weekTo: 7, adjustmentMultiplier: 1.1 },
      { weekFrom: 8, weekTo: 8, adjustmentMultiplier: 0.75 },
      { weekFrom: 9, weekTo: 10, adjustmentMultiplier: 1.0 },
    ],
  },

  [PlanType.HALF_MARATHON]: {
    planType: PlanType.HALF_MARATHON,
    totalWeeks: 12,
    weeklyIncreasePercent: 0.08,
    recoveryWeekFrequency: 4,
    recoveryWeekMultiplier: 0.75,
    progressionSteps: [
      { weekFrom: 1, weekTo: 3, adjustmentMultiplier: 1.0 },
      { weekFrom: 4, weekTo: 4, adjustmentMultiplier: 0.75 },
      { weekFrom: 5, weekTo: 7, adjustmentMultiplier: 1.1 },
      { weekFrom: 8, weekTo: 8, adjustmentMultiplier: 0.75 },
      { weekFrom: 9, weekTo: 11, adjustmentMultiplier: 1.05 },
      { weekFrom: 12, weekTo: 12, adjustmentMultiplier: 0.80 },
    ],
  },

  [PlanType.CENTURY_RIDE]: {
    planType: PlanType.CENTURY_RIDE,
    totalWeeks: 12,
    weeklyIncreasePercent: 0.08,
    recoveryWeekFrequency: 4,
    recoveryWeekMultiplier: 0.75,
    progressionSteps: [
      { weekFrom: 1, weekTo: 3, adjustmentMultiplier: 1.0 },
      { weekFrom: 4, weekTo: 4, adjustmentMultiplier: 0.75 },
      { weekFrom: 5, weekTo: 7, adjustmentMultiplier: 1.1 },
      { weekFrom: 8, weekTo: 8, adjustmentMultiplier: 0.75 },
      { weekFrom: 9, weekTo: 11, adjustmentMultiplier: 1.1 },
      { weekFrom: 12, weekTo: 12, adjustmentMultiplier: 0.80 },
    ],
  },

  [PlanType.FTP_IMPROVEMENT]: {
    planType: PlanType.FTP_IMPROVEMENT,
    totalWeeks: 8,
    weeklyIncreasePercent: 0.05,
    recoveryWeekFrequency: 4,
    recoveryWeekMultiplier: 0.70,
    progressionSteps: [
      { weekFrom: 1, weekTo: 3, adjustmentMultiplier: 1.0 },
      { weekFrom: 4, weekTo: 4, adjustmentMultiplier: 0.70 },
      { weekFrom: 5, weekTo: 7, adjustmentMultiplier: 1.1 },
      { weekFrom: 8, weekTo: 8, adjustmentMultiplier: 0.85 },
    ],
  },
};