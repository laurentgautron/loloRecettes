import './Ingredient.css';
import { useMealPlanStore } from '../../../../stores/useMealPlanStore';
import { selectRemoveIngredient, selectUpdateIngredient } from '../../../../stores/ingredientsSlice';
import { useState } from 'react';

function Ingredient({ id, name, date, recipeName, quantity }) {
    const removeIngredient = useMealPlanStore(selectRemoveIngredient);
    const updateIngredient = useMealPlanStore(selectUpdateIngredient);
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState({ quantity, date });

    function handleChange(ev) {
        const { name: field, value } = ev.target;
        setDraft((draft) => ({ ...draft, [field]: value }));
    };

    function handleSubmit(ev) {
        ev.preventDefault();
        updateIngredient(id, draft);
        setIsEditing(false);
    };

    return (
        <li className='ingredient'>
            <div className="ingredient-info">
                <h3>{name}</h3>
                <h5>Pour la recette: {recipeName}</h5>
                {isEditing
                    ? <form onSubmit={handleSubmit}>
                        <div className="quantity">
                            <label htmlFor="quantity">Quantité: </label>
                            <input type="text" name="quantity" id="quantity" value={draft.quantity} onChange={handleChange} />
                        </div>
                        <div className="date">
                            <label htmlFor="date">Date: </label>
                            <input type="date" name="date" id="date" value={draft.date} onChange={handleChange} />
                        </div>
                        <button type="submit" className="mod-save">Enregistrer</button>
                    </form>
                    : <>
                        <p>Quantité: {quantity}</p>
                        <p>Date: {date}</p>
                        <button type="button" className="mod-save" onClick={() => setIsEditing(true)}>Modifier</button>
                    </>
                }
            </div>
            <button type="button" className="remove" onClick={() => removeIngredient(id)}>Supprimer</button>
        </li>
    )
}

export default Ingredient
