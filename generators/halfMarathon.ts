import {
    BaseGenerator,
} from "./baseGenerator";

import {
    TrainingPlan,
    UserInput,
    PlanType,
} from "@/types/training";
import {
    RunningWorkouts,
} from "./workouts/running";

export class HalfMarathonGenerator
    extends BaseGenerator {

    generate(
        user: UserInput
    ): TrainingPlan {

        const progression =
            this.createProgression(
                PlanType.HALF_MARATHON,
                user
            );

        const plan =
            this.createBasePlan(
                PlanType.HALF_MARATHON,
                "First Half Marathon",
                "Build endurance for 21.1 km.",
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
                                "Weekday",
                                RunningWorkouts.easyRun(
                                    Math.round(volume * 0.2)
                                )
                            ),

                            this.scheduleWorkout(
                                "Weekday",
                                RunningWorkouts.tempoRun(
                                    Math.round(volume * 0.2)
                                )
                            ),

                            this.scheduleWorkout(
                                "Weekend",
                                RunningWorkouts.intervalRun(
                                    Math.round(volume * 0.15)
                                )
                            ),

                            this.scheduleWorkout(
                                "Weekend",
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