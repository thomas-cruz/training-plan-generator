import { UserInput, TrainingPlan, PlanType } from "@/types/training";
import { BaseGenerator } from "./baseGenerator";
import { CyclingWorkouts } from "./workouts/cycling";

export class GravelRaceGenerator
  extends BaseGenerator {

  generate(
    user: UserInput
  ): TrainingPlan {

    const progression =
      this.createProgression(
        PlanType.GRAVEL_RACE,
        user
      );

    const plan =
      this.createBasePlan(
        PlanType.GRAVEL_RACE,
        "First Gravel Race",
        "Build endurance and durability for gravel racing.",
        progression,
        "hours"
      );

    plan.weeks =
      progression.map(
        (
          hours,
          index
        ) =>
          this.createWeek(
            index + 1,
            hours,
            "hours",
            [
              this.scheduleWorkout(
                "Tuesday",
                CyclingWorkouts.sweetSpotRide(
                  1.5
                )
              ),

              this.scheduleWorkout(
                "Thursday",
                CyclingWorkouts.climbingRide(
                  1.5
                )
              ),

              this.scheduleWorkout(
                "Saturday",
                CyclingWorkouts.gravelRide(
                  Number(
                    (
                      hours * 0.35
                    ).toFixed(1)
                  )
                )
              ),

              this.scheduleWorkout(
                "Sunday",
                CyclingWorkouts.longRide(
                  Number(
                    (
                      hours * 0.45
                    ).toFixed(1)
                  )
                )
              ),
            ]
          )
      );

    return plan;
  }
}