import { useStore } from "../store/game.store";

export default function Game() {
  const gameStore = useStore();

  return (
    <>
      {!gameStore.tokens.length ? (
        <button className="">Начать</button>
      ) : (
        <div>Game</div>
      )}
    </>
  );
}
