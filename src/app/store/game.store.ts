import React, { useContext } from "react";
import { Token, TokenType } from "../types/store";

export interface GameState {
  tokens: Token[];
  drawnTokens: Token[];
}

const initialTokens: Token[] = [
  {
    type: TokenType.WHITE,
    value: 1,
  },
  {
    type: TokenType.WHITE,
    value: 1,
  },
  {
    type: TokenType.WHITE,
    value: 1,
  },
  {
    type: TokenType.WHITE,
    value: 1,
  },
  {
    type: TokenType.WHITE,
    value: 2,
  },
  {
    type: TokenType.WHITE,
    value: 2,
  },
  {
    type: TokenType.WHITE,
    value: 3,
  },
];

export class GameStore {
  tokens: Token[] = [];
  drawnTokens: Token[] = [];

  constructor(initialState: GameState | null) {
    if (initialState) {
      const { tokens, drawnTokens } = initialState;
      this.tokens = tokens;
      this.drawnTokens = drawnTokens;
    }
  }

  start() {
    this.tokens = initialTokens;
  }

  drawToken() {}

  shuffle() {}
}

export const StoreContext = React.createContext<GameStore | null>(null);

export const useStore = (): GameStore => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within StoreContext.Provider");
  }

  return context;
};
