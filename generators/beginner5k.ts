import {
  PlanType,
  TrainingPlan,
  UserInput,
} from "@/types/training";

import {
  RunningWorkouts,
} from "./workouts/running";

import { BaseGenerator }
  from "./baseGenerator";

export class Beginner5KGenerator
  extends BaseGenerator {

  generate(
    user: UserInput
  ): TrainingPlan {

    const progression =
      this.createProgression(
        PlanType.BEGINNER_5K,
        user
      );

    const plan =
      this.createBasePlan(
        PlanType.BEGINNER_5K,
        "Beginner 5K Run",
        "Build fitness to complete your first 5K.",
        progression,
        "km"
      );

    plan.weeks =
      progression.map(
        (volume, index) =>
          this.createWeek(
            index + 1,
            volume,
            "km",
            [
              this.scheduleWorkout(
                "Tuesday",
                RunningWorkouts.easyRun(
                  Math.round(volume * 0.3)
                )
              ),

              this.scheduleWorkout(
                "Thursday",
                RunningWorkouts.tempoRun(
                  Math.round(volume * 0.3)
                )
              ),

              this.scheduleWorkout(
                "Sunday",
                RunningWorkouts.longRun(
                  Math.round(volume * 0.4)
                )
              ),
            ]
          )
      );

    return plan;
  }
}