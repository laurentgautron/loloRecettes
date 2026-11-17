import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createReadingIngredientsSlice } from "./readingIngredientsSlice";
import { createReadingRecipeSlice } from "./readingListSlice";

export const useReadingStore = create(
    devtools(
        (set) => ({
            ...createReadingIngredientsSlice(set),
            ...createReadingRecipeSlice(set)
        })
    )
);