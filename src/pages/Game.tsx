import React from "react";
import { useStore } from "../store/game.store";

export default function Game() {
  const gameStore = useStore();
  const [count, setCount] = React.useState(0);

  const increase = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrease = React.useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div className="text-center">
      {!gameStore.tokens.length ? (
        <>
          <button className="">Начать</button>
          <div className="">{count}</div>
          <div className="flex justify-center">
            <button
              className="block px-4 py-2 rounded mx-4 bg-green-400"
              onClick={increase}
            >
              +
            </button>{" "}
            <button
              className="block px-4 py-2 rounded mx-4  bg-green-400"
              onClick={decrease}
            >
              -
            </button>
          </div>
        </>
      ) : (
        <div>Game</div>
      )}
    </div>
  );
}
