/**
 * Training Plan Generator - Comprehensive Type Definitions
 */

export enum PlanType {
  BEGINNER_5K = "Beginner 5K Run",
  BEGINNER_10K = "Beginner 10K Run",
  HALF_MARATHON = "First Half Marathon",
  MARATHON = "First Marathon",
  CENTURY_RIDE = "First Century Ride",
  GRAVEL_RACE = "First Gravel Race",
  CRITERIUM = "First Criterium Race",
  FTP_IMPROVEMENT = "FTP Improvement"
}

export interface UserInput {
  age: number;
  skillLevel: SkillLevel;
  weeklyVolume: number;
  currentCd?: number | null;
  targetFtP?: number | null;
  active?: boolean;
}

export enum SkillLevel {
  BEGINNER = "Beginner",
  INTERMEDIATE = "Intermediate",
  ADVANCED = "Advanced"
}

export interface TrainingDay {
  dayName: string;
  workoutType: DayWorkoutType;
  distanceKm?: number;
  durationHours?: number;
  durationMinutes?: number;
  intensityLevel: number;
  description: string;
  effort?: number;
  notes?: string;
}

export type DayWorkoutType =
  | "rest"
  | "recovery"

  | "easy_run"
  | "tempo_run"
  | "interval_run"
  | "long_run"

  | "short_run"
  | "speed"

  | "long_ride"
  | "structured_ride"
  | "interval_ride"

  | "threshold_ride"
  | "hiit"
  | "hill_ride"

  | "ss_ride"

  | "sprint_ride"
  | "race_sim"

  | "gravel_ride"

  | "strength"
  | "cross_train";

export interface TrainingWeek {
  weekNumber: number;

  targetVolume: number;

  volumeUnit:
  | "km"
  | "hours";

  days: TrainingDay[];

  notes?: string;
}

export interface TrainingPlan {
  id: string;
  planType: PlanType;
  title: string;
  description: string;
  totalWeeks: number;
  totalDurationDays: number;
  recommendedStartTime: string;
  weeks: TrainingWeek[];
  progressMetrics: ProgressMetric[];
}

export interface ProgressionStep {
  weekFrom: number;
  weekTo: number;
  adjustmentMultiplier: number;
}

export interface ProgressMetric {
  weekNumber: number;

  targetVolume: number;

  volumeUnit: "km" | "hours";
}
