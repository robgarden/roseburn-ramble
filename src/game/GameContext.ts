import React from "react";
import { Step } from "../interfaces/Step";

import { Game, INITIAL_GAME } from "./Game";

export interface IGameContext {
  game: Game;

  // actions
  startGame(): void;
  // saveGame(): void;
  addToCompletedSteps(step: Step): void
  loadGame(): Game | undefined;
}

export const defaultGameContext: IGameContext = {
  game: { completedSteps: [], started: false },
  startGame() {},
  // saveGame() {},
  addToCompletedSteps(step: Step) {},
  loadGame: () => INITIAL_GAME,
};

export const GameContext =
  React.createContext<IGameContext>(defaultGameContext);
