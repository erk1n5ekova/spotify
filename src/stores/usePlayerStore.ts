import { create } from "zustand";

interface IPlayerStore {
  accessToken: string;
  trackUris: string[];
  trackIndex: number | null;
  activeTrackUri: string;

  setAccessToken: (value: string) => void;
  setTrackUris: (value: string[]) => void;
  setTrackIndex: (value: number) => void;
  setActiveTrackUri: (value: string) => void;
}
export const usePlayerStore = create<IPlayerStore>((set) => ({
  accessToken: "",
  trackUris: [],
  trackIndex: null,
  activeTrackUri: "",

  setAccessToken: (value) => set({ accessToken: value }),
  setTrackUris: (value) => set({ trackUris: value }),
  setTrackIndex: (value) => set({ trackIndex: value }),
  setActiveTrackUri: (value) => set({ activeTrackUri: value }),
}));
