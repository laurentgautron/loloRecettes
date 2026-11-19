import { http, HttpResponse } from "msw";

const API_URL = import.meta.env.VITE_THEMEALDB_URL;


export const handlers = [
    http.get(`${API_URL}/categories.php`, () => {
        return HttpResponse.json({
            categories: [
                { idCategory: 1, strCategory: "Beef" },
                { idCategory: 2, strCategory: "Chicken" }
            ]
        })
    }),
    http.get(`${API_URL}/lookup.php`, ({ request }) => {
        const id = new URL(request.url).searchParams.get('i');

        return HttpResponse.json({
            meals: [{
                idMeal: id,
                strMeal: 'Teriyaki Chicken Casserole',
                strIngredient1: 'Chicken',
                strMeasure1: '500g',
                strIngredient2: 'Soy Sauce',
                strMeasure2: '2 tbsp',
            }]
        })
    }),
];