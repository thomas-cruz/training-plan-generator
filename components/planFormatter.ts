import { PlanType } from "@/types/training";

export interface DisplayWorkout {
  day: string;
  title: string;
  description: string;
}

export function formatWeek(
  planType: PlanType,
  schedule: number[]
): DisplayWorkout[] {

  switch (planType) {

    case PlanType.BEGINNER_5K:
    case PlanType.BEGINNER_10K:
    case PlanType.HALF_MARATHON:

      return [
        {
          day: "Weekday",
          title: "Easy Run",
          description: `${schedule[0]} km`
        },
        {
          day: "Weekday",
          title: "Easy Run",
          description: `${schedule[1]} km`
        },
        {
          day: "Weekend",
          title: "Long Run",
          description: `${schedule[2]} km`
        }
      ];

    case PlanType.CENTURY_RIDE:

      return [
        {
          day: "Weekday",
          title: "Recovery Ride",
          description: `${schedule[0]} hrs`
        },
        {
          day: "Weekday",
          title: "Endurance Ride",
          description: `${schedule[1]} hrs`
        },
        {
          day: "Weekend",
          title: "Long Ride",
          description: `${schedule[2]} hrs`
        }
      ];

    case PlanType.FTP_IMPROVEMENT:

      return [
        {
          day: "Weekday",
          title: "Threshold Intervals",
          description: `${schedule[0]} mins`
        },
        {
          day: "Weekday",
          title: "VO2 Max Intervals",
          description: `${schedule[1]} mins`
        },
        {
          day: "Weekend",
          title: "Sweet Spot Ride",
          description: `${schedule[2]} mins`
        }
      ];

    default:
      return [];
  }
}