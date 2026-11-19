import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import Categories from "./Categories";
import { expect, test } from "vitest";

function renderCategories() {
    const queryClient = new QueryClient({
        defaultOptions: { queries: { retry: false } }
    })
    return render(
        <QueryClientProvider client={queryClient}>
            <Categories selectedCategory="Beef" onCategorySelect={() => {}} />
        </QueryClientProvider>
    )
}

test('affiches les categories', async () => {
    renderCategories();

    expect(await screen.findByText('Beef')).toBeInTheDocument();
    expect(screen.getByText('Chicken')).toBeInTheDocument();
})