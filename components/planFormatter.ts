import {
  TrainingDay,
} from "@/types/training";

function getWorkoutTitle(
  workoutType: string
): string {

  switch (workoutType) {

    case "easy_run":
      return "Easy Run";

    case "tempo_run":
      return "Tempo Run";

    case "interval_run":
      return "Interval Run";

    case "long_run":
      return "Long Run";

    case "recovery":
      return "Recovery Session";

    case "structured_ride":
      return "Endurance Ride";

    case "ss_ride":
      return "Sweet Spot Ride";

    case "threshold_ride":
      return "Threshold Ride";

    case "interval_ride":
      return "VO₂ Max Intervals";

    case "long_ride":
      return "Long Ride";

    default:
      return workoutType;
  }
}

function getWorkoutDescription(
  workout: TrainingDay
): string {

  if (workout.distanceKm) {
    return `${workout.distanceKm} km`;
  }

  if (workout.durationHours) {
    return `${workout.durationHours} hours`;
  }

  if (workout.durationMinutes) {
    return `${workout.durationMinutes} minutes`;
  }

  return workout.description;
}

function getIntensityLabel(
  intensity: number
): string {

  if (intensity <= 2) {
    return "Recovery";
  }

  if (intensity <= 4) {
    return "Easy";
  }

  if (intensity <= 6) {
    return "Moderate";
  }

  if (intensity <= 8) {
    return "Hard";
  }

  return "Very Hard";
}

export interface DisplayWorkout {
  day: string;
  title: string;
  description: string;
  intensity: string;
}

export function formatWorkout(
  workout: TrainingDay
): DisplayWorkout {

  return {
    day: workout.dayName,

    title: getWorkoutTitle(
      workout.workoutType
    ),

    description:
      getWorkoutDescription(
        workout
      ),

    intensity:
      getIntensityLabel(
        workout.intensityLevel
      ),
  };
}