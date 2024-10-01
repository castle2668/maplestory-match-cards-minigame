import { create } from "zustand";

import { MODE } from "../data/constants";

export interface Player {
  id: number;
  name: string;
  score: number;
  turns: number;
  current: boolean;
}

// accept argument of type T or a callback using previous state of type T
type ReactStyleStateSetter<T> = T | ((prev: T) => T);

interface GameStore {
  mode: MODE.SINGLE | MODE.MULTI;
  setMode: (mode: MODE.SINGLE | MODE.MULTI) => void;
  players: Player[];
  setPlayers: (newArrOrSetterFn: ReactStyleStateSetter<Player[]>) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  mode: MODE.SINGLE,
  setMode: (mode) => set({ mode }),
  players: [
    { id: 1, name: "Player 1", score: 0, turns: 0, current: true },
    { id: 2, name: "Player 2", score: 0, turns: 0, current: false },
  ],
  setPlayers: (newArrOrSetterFn) =>
    set((prev) => {
      const newArr =
        typeof newArrOrSetterFn === "function"
          ? newArrOrSetterFn(prev.players)
          : newArrOrSetterFn;
      return { ...prev, players: newArr };
    }),
}));
