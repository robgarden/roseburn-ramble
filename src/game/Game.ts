import { Step } from "../interfaces/Step";

export interface Game {
  started: boolean;
  completedSteps: Step[];
}

export const INITIAL_GAME: Game = {
  completedSteps: [],
  started: false,
};
