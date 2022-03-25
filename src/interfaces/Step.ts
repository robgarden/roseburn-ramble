import { UUID } from "./UUID";

export interface Step {
  id: UUID;
  clues: string[];
  directions: string;
  answer: string;
}
