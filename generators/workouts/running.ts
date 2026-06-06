import {
    TrainingDay,
} from "@/types/training";

export const RunningWorkouts = {

    easyRun(
        distanceKm: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "easy_run",
            distanceKm,
            intensityLevel: 3,
            description: "Easy aerobic run",
        };
    },

    tempoRun(
        distanceKm: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "tempo_run",
            distanceKm,
            intensityLevel: 6,
            description: "Tempo run",
        };
    },

    intervalRun(
        distanceKm: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "interval_run",
            distanceKm,
            intensityLevel: 8,
            description: "Interval workout",
        };
    },

    longRun(
        distanceKm: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "long_run",
            distanceKm,
            intensityLevel: 4,
            description: "Long run",
        };
    },

    recoveryRun(
        distanceKm: number
    ): TrainingDay {
        return {
            dayName: "",
            workoutType: "recovery",
            distanceKm,
            intensityLevel: 2,
            description: "Recovery run",
        };
    },
};