import './Modale.css';
import { selectAddIngredient } from '../../Stores/readingIngredientsSlice';
import { selectAddRecipe } from '../../Stores/readingListSlice';
import { useReadingStore } from '../../Stores/useReadingStore';
import { getIngredients } from '../../utils';
import { useEffect, useState } from 'react';

function Modale({ meal, onClose }) {
    const [date, setDate] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const addRecipes = useReadingStore(selectAddRecipe);
    const addIngredient = useReadingStore(selectAddIngredient);

    useEffect(() => {
        async function fetchIngredients() {
            const ingredientInfos = await getIngredients(meal);
            setIngredients(ingredientInfos);
        }
        fetchIngredients();
    }, []);

    function handleSubmit(ev) {
        ev.preventDefault();
        addRecipes({
            id: meal.idMeal,
            date: date,
            name: meal.strMeal
        });
        ingredients.forEach(ingredient => {
            addIngredient({
                name: ingredient.name,
                mealId: meal.idMeal,
                date: date,
                quantity: ingredient.quantity
            });
        });
        onClose();
    }

    return (
        <div className='modale-overlay'>
            <div className="modale-content">
                <button type="button" className="close" onClick={onClose}>x</button>
                <h2>{meal.strMeal}</h2>
                <form onSubmit={(ev) => handleSubmit(ev)}>
                    <label htmlFor="date">Entrer une date de consommation:</label>
                    <input required type="date" name="date" id="date" value={date} onChange={(ev) => setDate(ev.target.value)} />
                    <button type="submit" className='add-courses'>Ajouter en courses</button>
                </form>
            </div>
        </div>
    )
}

export default Modale