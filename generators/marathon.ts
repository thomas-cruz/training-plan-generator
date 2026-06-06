import { UserInput, TrainingPlan, PlanType } from "@/types/training";
import { BaseGenerator } from "./baseGenerator";
import { RunningWorkouts } from "./workouts/running";

export class MarathonGenerator
  extends BaseGenerator {

  generate(
    user: UserInput
  ): TrainingPlan {

    const progression =
      this.createProgression(
        PlanType.MARATHON,
        user
      );

    const plan =
      this.createBasePlan(
        PlanType.MARATHON,
        "First Marathon",
        "Prepare for your first marathon.",
        progression,
        "km"
      );

    plan.weeks =
      progression.map(
        (
          volume,
          index
        ) =>
          this.createWeek(
            index + 1,
            volume,
            "km",
            [
              this.scheduleWorkout(
                "Tuesday",
                RunningWorkouts.easyRun(
                  Math.round(volume * 0.20)
                )
              ),

              this.scheduleWorkout(
                "Thursday",
                RunningWorkouts.tempoRun(
                  Math.round(volume * 0.20)
                )
              ),

              this.scheduleWorkout(
                "Saturday",
                RunningWorkouts.intervalRun(
                  Math.round(volume * 0.15)
                )
              ),

              this.scheduleWorkout(
                "Sunday",
                RunningWorkouts.longRun(
                  Math.round(volume * 0.45)
                )
              ),
            ]
          )
      );

    return plan;
  }
}