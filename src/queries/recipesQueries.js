import { getMealCategories, getMealIngredients, getMealsByCategory, getMealsByName } from "../services/mealDBApi";

export function categoriesQuery() {
    return {
        queryKey: ['categories'],
        queryFn: getMealCategories
    };
}

export function mealIngredientsQuery(mealId) {
    return {
        queryKey: ['ingredients', mealId],
        queryFn: () => getMealIngredients(mealId)
    }
};

export function recipesByNameQuery(name) {
    return {
        queryKey: ['recipes', 'name', name],
        queryFn: () => getMealsByName(name),
        enabled: Boolean(name?.trim())
    }
};

export function recipesByCategoryQuery(category) {
    return {
        queryKey: ['recipes', 'category', category],
        queryFn: () => getMealsByCategory(category),
        enabled: Boolean(category)
    }
};
