import {
    PlanType,
    TrainingPlan,
    UserInput,
} from "@/types/training";

import { BaseGenerator }
    from "./baseGenerator";

import {
    RunningWorkouts,
} from "./workouts/running";

export class Beginner10KGenerator
    extends BaseGenerator {

    generate(
        user: UserInput
    ): TrainingPlan {

        const progression =
            this.createProgression(
                PlanType.BEGINNER_10K,
                user
            );

        const plan =
            this.createBasePlan(
                PlanType.BEGINNER_10K,
                "Beginner 10K Run",
                "Prepare for your first 10K.",
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