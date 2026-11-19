import './PageShopping.css';
import { selectIngredients } from '../../../../stores/ingredientsSlice';
import { selectRecipes } from '../../../../stores/plannedRecipesSlice';
import { useMealPlanStore } from '../../../../stores/useMealPlanStore';
import Ingredient from '../../components/Ingredient/Ingredient';

function PageShopping() {
    const ingredients = useMealPlanStore(selectIngredients);
    const recipes = useMealPlanStore(selectRecipes);

    const sortedIngredients = [...ingredients].sort((a, b) => {
        return Date.parse(b.date) - Date.parse(a.date);
    });

    return (
        <div className='shopping'>
            <h2>Courses</h2>
            <ul>
                {sortedIngredients.length !== 0 && 
                    sortedIngredients.map((ingredient) => {
                        return <Ingredient 
                            key={ingredient.id} 
                            {...ingredient} 
                            recipeName={recipes.find((recipe) => recipe.id === ingredient.mealId)?.name}
                        />
                    })
                }
            </ul>
        </div>
    )
}

export default PageShopping
