import { LngLat } from "mapbox-gl";
import { UUID } from "./UUID";

export interface Step {
  id: UUID;
  clues: string[];
  directions: string;
  answer: string;
  shortAnswer: string;
  coords?: LngLat
}
