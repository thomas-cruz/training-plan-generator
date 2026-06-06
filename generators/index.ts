import {
  PlanType,
} from "@/types/training";

import {
  Beginner5KGenerator,
} from "./beginner5k";

import {
  Beginner10KGenerator,
} from "./beginner10k";

import {
  HalfMarathonGenerator,
} from "./halfMarathon";

import {
  CenturyRideGenerator,
} from "./centuryRide";

import {
  FTPImprovementGenerator,
} from "./ftpImprovement";

export const generators = {
  [PlanType.BEGINNER_5K]:
    new Beginner5KGenerator(),

  [PlanType.BEGINNER_10K]:
    new Beginner10KGenerator(),

  [PlanType.HALF_MARATHON]:
    new HalfMarathonGenerator(),

  [PlanType.CENTURY_RIDE]:
    new CenturyRideGenerator(),

  [PlanType.FTP_IMPROVEMENT]:
    new FTPImprovementGenerator(),
};