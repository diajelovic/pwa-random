import { GameState } from "./game.store";

export const saveLocalState = (value: GameState) => {
  localStorage.setItem("game-state", JSON.stringify(value));
};

export const getLocalState = (): GameState | null => {
  const state = localStorage.getItem("game-state");
  return state ? (JSON.parse(state) as GameState) : null;
};
