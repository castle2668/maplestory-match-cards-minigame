import { create } from "zustand";

interface MusicState {
  autoPlay: boolean;
  allowAutoPlay: () => void;
}

const useMusicStore = create<MusicState>((set) => ({
  autoPlay: false,
  allowAutoPlay: () => set({ autoPlay: true }),
}));

export default useMusicStore;
