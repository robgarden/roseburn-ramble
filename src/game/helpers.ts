import { Game } from "./Game";

const GAME_STORAGE_KEY = "game";

export function checkExistingGame(): boolean {
  try {
    const data = localStorage.getItem(GAME_STORAGE_KEY);
    return !!data;
  } catch {
    return false;
  }
}

export function loadExistingGame(): Game | undefined {
  if (checkExistingGame()) {
    const data = localStorage.getItem(GAME_STORAGE_KEY);

    if (data) {
      const game = JSON.parse(data);
      return game;
    }
  }
}

export function saveGameToLocalStorage(game: Game): void {
  localStorage.setItem(GAME_STORAGE_KEY, JSON.stringify(game));
}
