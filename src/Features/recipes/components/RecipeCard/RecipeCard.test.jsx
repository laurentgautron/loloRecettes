import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import RecipeCard from "./RecipeCard";
import { expect } from "vitest";
import { MemoryRouter } from "react-router";
import { useMealPlanStore } from "../../../../stores/useMealPlanStore";


const recipe = {
    idMeal: '52772',
    strMeal: 'Teriyaki Chicken Casserole',
    strMealThumb: 'https://example.com/photo.jpg'
}

function renderRecipeCard() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: { retry: false }
        }
    })
    const view = render(
        <QueryClientProvider client={queryClient}>
            <MemoryRouter>
                <RecipeCard {...recipe} />
            </MemoryRouter>
        </QueryClientProvider>
    )

    return { queryClient, ...view }
}

test('affiche une RecipeCard', () => {
    renderRecipeCard();

    expect(screen.getByRole('heading', { name: recipe.strMeal })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ajouter au planning' })).toBeInTheDocument();
});

test('ouvre la modale au clic sur bouton calendrier', () => {
    renderRecipeCard()

    expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Ajouter au planning' }));
    expect(screen.getByRole('heading', { name: recipe.strMeal, level: 2 })).toBeInTheDocument();
    expect(screen.getByLabelText(/date de consommation/i)).toBeInTheDocument();
})

test('ajoute recette au planning ave bouton', async () => {
    const { queryClient } = renderRecipeCard();
    fireEvent.click(screen.getByRole('button', { name: 'Ajouter au planning' }));
    await waitFor(() => {
        expect(queryClient.getQueryData(['ingredients', recipe.idMeal])).toBeDefined();
    });

    fireEvent.change(screen.getByLabelText(/date de consommation/i), {
        target: { value: '2026-11-25' },
    });

    fireEvent.click(screen.getByRole('button', { name: /ajouter en courses/i }));

    const { recipes, ingredients } = useMealPlanStore.getState();

    expect(recipes).toEqual([
        {
            id: recipe.idMeal,
            name: recipe.strMeal,
            date: "2026-11-25"
        }
    ]
    );
    expect(ingredients).toHaveLength(2);
    expect(ingredients[0]).toMatchObject({
        name: 'Chicken',
        quantity: '500g',
        mealId: recipe.idMeal,
        date: "2026-11-25"
    });
})