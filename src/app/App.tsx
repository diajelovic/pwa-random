import React from "react";
import Game from "./pages/Game";
import { GameStore, StoreContext } from "./store/game.store";
import { getLocalState } from "./store/local.store";

const App: React.FC = React.memo(() => {
  const gameState = getLocalState();

  return (
    <StoreContext.Provider value={new GameStore(gameState)}>
      <Game />;
    </StoreContext.Provider>
  );
});

export default App;
