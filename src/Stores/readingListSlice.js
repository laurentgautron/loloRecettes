export const createReadingRecipeSlice = (set) => ({
    recipes: [],
    addRecipe: (recipe) => set((state) => {
        return { recipes: [...state.recipes, {
            id: recipe.id, 
            date: recipe.date,
            name: recipe.name
        }]}
    }),
    changeRecipeDate: (id, date) => set((state) => {
        return {
            recipes: state.recipes.map((recipe) => {
                if (id === recipe.id) {
                    return {...recipe, date: date};
                }
                return {...recipe};
            })
        }
    }),
    removeRecipe: (id) => set((state) => {
        return {recipes: state.recipes.filter(recipe => recipe.id !== id)}
    })
});

export const selectRecipes = (state) => state.recipes;
export const selectAddRecipe = (state) => state.addRecipe;
export const selectChangeRecipeDate = (state) => state.changeRecipeDate;
export const selectRemoveRecipe = (state) => state.removeRecipe;