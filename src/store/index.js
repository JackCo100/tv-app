import {create} from "zustand";
import { devtools } from "zustand/middleware";
import { querySlice } from "./slices/querySlice";

export const useStore = create(devtools((set) => ({
    ...querySlice(set)
})));