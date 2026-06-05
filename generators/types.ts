import { UserInput, TrainingPlan } from "@/types/training";

export interface PlanGenerator {
  generate(
    userInput: UserInput
  ): TrainingPlan;
}