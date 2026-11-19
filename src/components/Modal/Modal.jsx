import './Modal.css';
import { selectAddIngredient } from '../../stores/ingredientsSlice';
import { selectAddRecipe } from '../../stores/plannedRecipesSlice';
import { useMealPlanStore } from '../../stores/useMealPlanStore';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { mealIngredientsQuery } from '../../queries/recipesQueries';

function Modal({ recipe, onClose }) {
    const [date, setDate] = useState('');
    const addRecipe = useMealPlanStore(selectAddRecipe);
    const addIngredient = useMealPlanStore(selectAddIngredient);
    const { data } = useQuery(mealIngredientsQuery(recipe.idMeal));
    const ingredients = data?? [];

    function handleSubmit(ev) {
        ev.preventDefault();
        addRecipe({
            id: recipe.idMeal,
            date: date,
            name: recipe.strMeal
        });
        ingredients.forEach(ingredient => {
            addIngredient({
                name: ingredient.name,
                mealId: recipe.idMeal,
                date: date,
                quantity: ingredient.quantity
            });
        });
        onClose();
    }

    return (
        <div className='modal-overlay'>
            <div className="modal-content">
                <button type="button" className="close" onClick={onClose}>x</button>
                <h2>{recipe.strMeal}</h2>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <label htmlFor="date">Entrer une date de consommation: </label>
                    <input required type="date" name="date" id="date" value={date} onChange={(ev) => setDate(ev.target.value)} />
                    <button type="submit" className='add-courses'>Ajouter en courses</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;
