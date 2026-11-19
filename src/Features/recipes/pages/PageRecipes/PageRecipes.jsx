import './PageRecipes.css';
import Categories from '../../../../components/Categories/Categories';
import SearchBar from '../../../../components/SearchBar/SearchBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { recipesByNameQuery, recipesByCategoryQuery } from '../../../../queries/recipesQueries';

function PageRecipes() {
    const [recipeName, setRecipeName] = useState(null);
    const [category, setCategory] = useState('Beef');

    const isNameSearch = Boolean(recipeName?.trim());

    const nameRecipesQuery = useQuery(recipesByNameQuery(recipeName));
    const categoryRecipesQuery = useQuery(recipesByCategoryQuery(category));

    const activeQuery = isNameSearch ? nameRecipesQuery : categoryRecipesQuery;
    const selectedRecipes = activeQuery.data ?? [];
    const loading = activeQuery.isLoading || (!isNameSearch && !category);

    return (
        <main>
            <SearchBar onSearch={setRecipeName}/>
            <Categories selectedCategory={category} onCategorySelect={setCategory} />
            <section>
                <ul className='recipes-list'>
                    {loading
                        ? <p>Chargement des recettes</p>
                        : selectedRecipes.length === 0
                            ? <p>Aucune recette trouvée</p>
                            : selectedRecipes.map((recipe) => {
                                return <li key={recipe.idMeal}><RecipeCard {...recipe} /></li>
                            })}
                </ul>
            </section>
        </main>
    )
}

export default PageRecipes;
