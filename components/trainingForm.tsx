"use client";

import { ChangeEvent } from "react";
import {
  PlanType,
  SkillLevel,
  UserInput,
} from "@/types/training";
import { Tooltip } from "./volumeTooltip";

interface Props {
  formData: UserInput;
  planType: PlanType;

  onFormChange: (
    data: UserInput
  ) => void;

  onPlanTypeChange: (
    plan: PlanType
  ) => void;

  onSubmit: () => void;
}

export default function TrainingForm({
  formData,
  planType,
  onFormChange,
  onPlanTypeChange,
  onSubmit,
}: Props) {
  const updateField = <
    K extends keyof UserInput
  >(
    field: K,
    value: UserInput[K]
  ) => {
    onFormChange({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className="space-y-4">

      <div>
        <label className="block">
          Plan Type?
        </label>

        <select
          className="bg-gray-800 border p-2 w-full"
          value={planType}
          onChange={(e) =>
            onPlanTypeChange(
              e.target.value as PlanType
            )
          }
        >
          {Object.values(PlanType).map(
            (plan) => (
              <option
                key={plan}
                value={plan}
              >
                {plan}
              </option>
            )
          )}
        </select>
      </div>

      <div>
        <label className="block">
          Age?
        </label>

        <input
          className="border p-2 w-full"
          type="number"
          value={formData.age}
          onChange={(e) =>
            updateField(
              "age",
              Number(e.target.value)
            )
          }
        />
      </div>

      <div>
        <label className="block">
          Skill Level?
        </label>

        <select
          className="bg-gray-800 border p-2 w-full"
          value={formData.skillLevel}
          onChange={(e) =>
            updateField(
              "skillLevel",
              e.target.value as SkillLevel
            )
          }
        >
          {Object.values(
            SkillLevel
          ).map((level) => (
            <option
              key={level}
              value={level}
            >
              {level}
            </option>
          ))}
        </select>
      </div>

      <Tooltip message="Running volume uses KM. Cycling volume uses HOURS">
        <label className="block">
          Weekly Volume
        </label>

        <input
          className="border p-2 w-full"
          type="number"
          value={formData.weeklyVolume}
          onChange={(e) =>
            updateField(
              "weeklyVolume",
              Number(e.target.value)
            )
          }
        />
      </Tooltip>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={onSubmit}
      >
        Generate Plan
      </button>
    </div>
  );
}