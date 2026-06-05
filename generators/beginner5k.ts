import {
    PlanType,
    UserInput,
    TrainingPlan,
  } from "@/types/training";
  
  import {
    BaseGenerator,
  } from "./baseGenerator";
  
  export class Beginner5KGenerator
    extends BaseGenerator
  {
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
          "Beginner 5K",
          "8 week beginner 5K plan",
          progression
        );
  
      plan.weeklySchedule =
        progression.map(
          (volume) => [
            volume * 0.3,
            volume * 0.3,
            volume * 0.4,
          ]
        );
  
      return plan;
    }
  }