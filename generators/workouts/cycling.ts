import {
    TrainingDay,
} from "@/types/training";

export const CyclingWorkouts = {

    enduranceRide(
        durationHours: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "structured_ride",
            durationHours,
            intensityLevel: 4,
            description: "Endurance ride",
        };
    },

    sweetSpotRide(
        durationHours: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "ss_ride",
            durationHours,
            intensityLevel: 5,
            description: "Sweet spot ride",
        };
    },

    thresholdRide(
        durationMinutes: number,
        description: string
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "threshold_ride",
            durationMinutes,
            intensityLevel: 8,
            description,
        };
    },

    vo2Ride(
        durationMinutes: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "interval_ride",
            durationMinutes,
            intensityLevel: 9,
            description: "VO2 max intervals",
        };
    },

    longRide(
        durationHours: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "long_ride",
            durationHours,
            intensityLevel: 3,
            description: "Long endurance ride",
        };
    },

    sprintRide(
        durationMinutes: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "sprint_ride",
            durationMinutes,
            intensityLevel: 10,
            description:
                "Sprint intervals",
        };
    },

    raceSimulation(
        durationMinutes: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "race_sim",
            durationMinutes,
            intensityLevel: 9,
            description:
                "Race simulation",
        };
    },

    gravelRide(
        durationHours: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "gravel_ride",
            durationHours,
            intensityLevel: 4,
            description:
                "Gravel endurance ride",
        };
    },

    climbingRide(
        durationHours: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "hill_ride",
            durationHours,
            intensityLevel: 7,
            description: "Hill repeat workout",
        };
    },
};