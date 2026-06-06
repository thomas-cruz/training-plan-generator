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

const FTP_BLOCKS = [
    "2x10 @ FTP",
    "2x15 @ FTP",
    "2x20 @ FTP",
    "Recovery Week",
    "3x15 @ FTP",
    "3x20 @ FTP",
    "4x15 @ FTP",
    "FTP Test",
];

export class FTPImprovementGenerator
    extends BaseGenerator {

    generate(
        user: UserInput
    ): TrainingPlan {

        const progression =
            this.createProgression(
                PlanType.FTP_IMPROVEMENT,
                user
            );

        const plan =
            this.createBasePlan(
                PlanType.FTP_IMPROVEMENT,
                "FTP Improvement",
                "Increase Functional Threshold Power.",
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
                                "Weekday",
                                CyclingWorkouts.thresholdRide(
                                    60,
                                    FTP_BLOCKS[index]
                                )
                            ),

                            this.scheduleWorkout(
                                "Weekday",
                                CyclingWorkouts.vo2Ride(
                                    60
                                )
                            ),

                            this.scheduleWorkout(
                                "Weekend",
                                CyclingWorkouts.enduranceRide(
                                    2
                                )
                            ),
                        ]
                    )
            );

        return plan;
    }
}