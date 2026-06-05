"use client";

import { useState } from "react";

import TrainingForm
  from "@/components/trainingForm";

import TrainingPlanDisplay
  from "@/components/trainingPlanDisplay";

import {
  PlanType,
  SkillLevel,
  UserInput,
  TrainingPlan,
} from "@/types/training";
import { generatePlan } from "@/generators/generatePlan";

export default function Home() {

  const [planType, setPlanType] =
    useState(
      PlanType.BEGINNER_5K
    );

  const [formData, setFormData] =
    useState<UserInput>({
      age: 30,
      skillLevel:
        SkillLevel.BEGINNER,
      weeklyVolume: 20,
      active: true,
    });

  const [plan, setPlan] =
    useState<
      TrainingPlan | null
    >(null);

  // const handleGeneratePlan =
  //   () => {

  //     // temporary stub

  //     const generatedPlan:
  //       TrainingPlan = {
  //         id: crypto.randomUUID(),

  //         planType,

  //         title:
  //           `${planType} Plan`,

  //         description:
  //           "Generated plan",

  //         totalWeeks: 8,

  //         totalDurationDays:
  //           56,

  //         recommendedStartTime:
  //           "Immediate",

  //         weeklySchedule: [],

  //         workouts: [],

  //         progressMetrics:
  //           [],

  //         recoveryInstructions:
  //           [],
  //       };

  //     setPlan(
  //       generatedPlan
  //     );
  //   };
  const handleGeneratePlan = () => {
    const plan = generatePlan(
      planType,
      formData
    );
  
    setPlan(plan);
  };

  return (
    <main className="max-w-4xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Training Plan Generator
      </h1>

      <TrainingForm
        formData={formData}
        planType={planType}
        onFormChange={
          setFormData
        }
        onPlanTypeChange={
          setPlanType
        }
        onSubmit={
          handleGeneratePlan
        }
      />

      {plan && (
        <TrainingPlanDisplay
          plan={plan}
        />
      )}

    </main>
  );
}