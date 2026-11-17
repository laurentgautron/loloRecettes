import './PageShopping.css';
import { selectIngredients } from '../../../../Stores/readingIngredientsSlice';
import { selectRecipes } from '../../../../Stores/readingListSlice';
import { useReadingStore } from '../../../../Stores/useReadingStore';
import Ingredient from '../../Component/Ingredient/Ingredient';

function PageShopping() {
    const ingredients = useReadingStore(selectIngredients);
    const recipes = useReadingStore(selectRecipes);

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