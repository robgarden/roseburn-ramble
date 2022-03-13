import { UUID } from "./UUID";

export interface Step {
  id: UUID;
  clue: string;
  walkingDirections: string;
}
