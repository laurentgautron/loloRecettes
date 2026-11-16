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
    console.log("Identifiant: ", id);
    const response = await fetch(`${MEALDB_URL}/lookup.php?i=${id}`);
    const results = await response.json();
    console.log(results.meals[0]);
    return results.meals[0];
}