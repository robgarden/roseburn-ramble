import { LngLat } from "mapbox-gl";
import { UUID } from "./UUID";

export enum StepType {
  Suspect,
  Location,
}

export interface Step {
  id: UUID;
  clues: string[];
  directions: string;
  answer: string;
  shortAnswer: string;
  type: StepType;
  coords?: LngLat;
}
