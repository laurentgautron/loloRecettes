const MEALDB_URL = import.meta.env.VITE_THEMEALDB_URL;

export async function getMealCategories() {
    const response = await fetch(`${MEALDB_URL}/categories.php`);
    const results = await response.json();
    return results.categories;
};

export async function getMealsByCategory(category) {
    const response = await fetch(`${MEALDB_URL}/filter.php?c=${category}`);
    const results = await response.json();
    return results.meals;
}

export async function getMealsByName(name) {
    const response = await fetch(`${MEALDB_URL}/search.php?s=${encodeURIComponent(name)}`);
    const results = await response.json();
    return results.meals;
}

export async function getMealById(id) {
    const response = await fetch(`${MEALDB_URL}/lookup.php?i=${id}`);
    const results = await response.json();
    return results.meals[0];
}

export async function getIngredients(meal) {
    const mealDetail = await getMealById(meal.idMeal);
    const ingredientsList = [];
    for(let i=1; i < 20; i++) {
        const ingredient = mealDetail[`strIngredient${i}`];
        const quantity = mealDetail[`strMeasure${i}`]
        if (ingredient && ingredient.trim() !== '') {
            ingredientsList.push({name: ingredient, quantity: quantity});
        }

    }
    console.log(ingredientsList);
    return ingredientsList;
}