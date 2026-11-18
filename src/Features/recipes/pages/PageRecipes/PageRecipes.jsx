import './PageRecipes.css';
import Categories from '../../../../Component/Categories/Categories';
import Research from '../../../../Component/Research/Research';
import Meal from '../../Component/Meal/Meal';
import { useState, useContext } from 'react';
import { AppContext } from '../../../../Context/AppContext';
import { useQuery } from '@tanstack/react-query';
import { nameRecipeQuery, recipesCategoryQuery } from '../../../../queries/recipesQueries';

function PagesRecipes() {
    const { mealName } = useContext(AppContext);
    const [category, setCategory] = useState('Beef');

    const isNameResearch = Boolean(mealName?.trim());

    const nameRecipesQuery = useQuery(nameRecipeQuery(mealName));
    const categoryRecipesQuery = useQuery(recipesCategoryQuery(category));

    const activeQuery = isNameResearch ? nameRecipesQuery : categoryRecipesQuery;
    const selectedMeals = activeQuery.data ?? [];
    const loading = activeQuery.isLoading || (!isNameResearch && !category);

    return (
        <main>
            <Research />
            <Categories selectedCategory={category} onCategorySelect={setCategory} />
            <section>
                <ul className='meals-list'>
                    {loading
                        ? <p>Chargement des recettes</p>
                        : selectedMeals.length === 0
                            ? <p>Aucune recette trouvée</p>
                            : selectedMeals.map((meal) => {
                                return <li key={meal.idMeal}><Meal {...meal} /></li>
                            })}
                </ul>
            </section>
        </main>
    )
}

export default PagesRecipes