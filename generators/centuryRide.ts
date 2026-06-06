import {
    BaseGenerator,
} from "./baseGenerator";

import {
    TrainingPlan,
    UserInput,
    PlanType,
} from "@/types/training";

import {
    CyclingWorkouts,
} from "./workouts/cycling";

export class CenturyRideGenerator
    extends BaseGenerator {

    generate(
        user: UserInput
    ): TrainingPlan {

        const progression =
            this.createProgression(
                PlanType.CENTURY_RIDE,
                user
            );

        const plan =
            this.createBasePlan(
                PlanType.CENTURY_RIDE,
                "First Century Ride",
                "Prepare for a 160 km ride.",
                progression,
                "hours"
            );

        plan.weeks =
            progression.map(
                (hours, index) =>
                    this.createWeek(
                        index + 1,
                        hours,
                        "hours",
                        [
                            this.scheduleWorkout(
                                "Tuesday",
                                CyclingWorkouts.enduranceRide(
                                    1.5
                                )
                            ),

                            this.scheduleWorkout(
                                "Thursday",
                                CyclingWorkouts.sweetSpotRide(
                                    1.5
                                )
                            ),

                            this.scheduleWorkout(
                                "Sunday",
                                CyclingWorkouts.longRide(
                                    Math.round(
                                        hours * 0.5 * 10
                                    ) / 10
                                )
                            ),
                        ]
                    )
            );

        return plan;
    }
}