import { UserInput, TrainingPlan, PlanType } from "@/types/training";
import { BaseGenerator } from "./baseGenerator";
import { CyclingWorkouts } from "./workouts/cycling";

export class CriteriumGenerator
  extends BaseGenerator {

  generate(
    user: UserInput
  ): TrainingPlan {

    const progression =
      this.createProgression(
        PlanType.CRITERIUM,
        user
      );

    const plan =
      this.createBasePlan(
        PlanType.CRITERIUM,
        "First Cycling Criterium",
        "Develop race-specific power and repeatability.",
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
                "Weekday",
                CyclingWorkouts.thresholdRide(
                  60,
                  "2x20 FTP"
                )
              ),

              this.scheduleWorkout(
                "Weekday",
                CyclingWorkouts.sprintRide(
                  45
                )
              ),

              this.scheduleWorkout(
                "Weekend",
                CyclingWorkouts.raceSimulation(
                  60
                )
              ),

              this.scheduleWorkout(
                "Weekend",
                CyclingWorkouts.enduranceRide(
                  Math.max(
                    2,
                    hours * 0.4
                  )
                )
              ),
            ]
          )
      );

    return plan;
  }
}