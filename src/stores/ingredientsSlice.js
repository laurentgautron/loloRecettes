export const createIngredientsSlice = ((set) => ({
    ingredients: [],
    addIngredient: (ingredient) => set((state) => {
        return { ingredients: [...state.ingredients, {
            id: crypto.randomUUID(),
            name: ingredient.name,
            mealId: ingredient.mealId,
            date: ingredient.date,
            quantity: ingredient.quantity
        }]}
    }),
    removeIngredient: (id) => set((state) => {
        return {ingredients: state.ingredients.filter(ingredient => ingredient.id !== id)}
    }),
    removeIngredientsByMealId: (mealId) => set((state) => {
        return {ingredients: state.ingredients.filter(ingredient => ingredient.mealId !== mealId)}
    }),
    updateIngredient: (id, changes) => set((state) => {
        return {
            ingredients: state.ingredients.map((ingredient) => {
                if (ingredient.id === id) {
                    return {...ingredient, date: changes.date, quantity: changes.quantity};
                };
                return ingredient;
            })
        }
    }),
    changeIngredientDatesByMealId: (mealId, date) => set((state) => {
        return {
            ingredients: state.ingredients.map((ingredient) => {
                if (ingredient.mealId === mealId) {
                    return {...ingredient, date: date};
                }
                return ingredient;
            })
        }
    })
}));

export const selectIngredients = (state) => state.ingredients;
export const selectAddIngredient = (state) => state.addIngredient;
export const selectRemoveIngredient = (state) => state.removeIngredient;
export const selectUpdateIngredient = (state) => state.updateIngredient;
export const selectChangeIngredientDatesByMealId = (state) => state.changeIngredientDatesByMealId;
export const selectRemoveIngredientsByMealId = (state) => state.removeIngredientsByMealId;
