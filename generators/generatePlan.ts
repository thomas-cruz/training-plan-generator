import {
    PlanType,
    UserInput,
  } from "@/types/training";
  
  import {
    generators,
  } from "./index";
  
  export function generatePlan(
    planType: PlanType,
    user: UserInput
  ) {
    return generators[
      planType
    ].generate(user);
  }