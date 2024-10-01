import { create } from "zustand";

interface MusicState {
  autoPlay: boolean;
  allowAutoPlay: () => void;
}

export const useMusicStore = create<MusicState>((set) => ({
  autoPlay: false,
  allowAutoPlay: () => set({ autoPlay: true }),
}));
