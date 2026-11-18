import { getIngredients, getMealCategories, getMealsByCategory, getMealsByName } from "../services/mealDBApi";

export function categoriesQuery() {
    return {
        queryKey: ['categories'],
        queryFn: getMealCategories
    };
}

export function ingredientsQuery(meal) {
    return {
        queryKey: ['ingredient'],
        queryFn: () => getIngredients(meal)
    }
};

export function nameRecipeQuery(name) {
    return {
        queryKey: ['recipes', 'name', name],
        queryFn: () => getMealsByName(name),
        enabled: Boolean(name?.trim())
    }
};

export function recipesCategoryQuery(category) {
    return {
        queryKey: ['category', 'recipes', category],
        queryFn: () => getMealsByCategory(category),
        enabled: Boolean(category)
    }
};
