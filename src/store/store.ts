import { create } from 'zustand';

export const useStore = create<{
    dialogOpen: boolean;
}>((set) => ({
    dialogOpen: false,
}));