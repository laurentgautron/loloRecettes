import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { createReadingIngredientsSlice } from "./readingIngredientsSlice";
import { createReadingRecipeSlice } from "./readingListSlice";

export const useReadingStore = create(
    devtools(
        persist(
            (set) => ({
                ...createReadingIngredientsSlice(set),
                ...createReadingRecipeSlice(set)
            }),
            {
                name: "food-recipes",
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
);