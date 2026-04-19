import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { showsSlice } from './slices/showsSlice';
import { alternativeShowsSlice } from './slices/alternativeShowsSlice';

export const useStore = create(
  devtools((set) => ({
    ...showsSlice(set),
    ...alternativeShowsSlice(set),
  })),
);
