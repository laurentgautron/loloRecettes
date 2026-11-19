import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { createIngredientsSlice } from "./ingredientsSlice";
import { createPlannedRecipesSlice } from "./plannedRecipesSlice";

export const useMealPlanStore = create(
    devtools(
        persist(
            (set) => ({
                ...createIngredientsSlice(set),
                ...createPlannedRecipesSlice(set)
            }),
            {
                name: "food-recipes",
                storage: createJSONStorage(() => sessionStorage)
            }
        )
    )
);
