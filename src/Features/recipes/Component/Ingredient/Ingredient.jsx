import './Ingredient.css';
import { useReadingStore } from '../../../../Stores/useReadingStore';
import { selectRemoveIngredient, selectUpdateIngredient } from '../../../../Stores/readingIngredientsSlice';
import { useState } from 'react';

function Ingredient({ id, name, date, recipeName, quantity }) {
    const removeIngredient = useReadingStore(selectRemoveIngredient);
    const updateIngredient = useReadingStore(selectUpdateIngredient);
    const [wantModify, setWantModify] = useState(false);
    const [ingredientInfos, setIngredientInfos] = useState({ quantity, date });

    function handleChange(ev) {
        const { name: field, value } = ev.target;
        setIngredientInfos((infos) => ({ ...infos, [field]: value }));
    };

    function handleSubmit(ev) {
        ev.preventDefault();
        updateIngredient(id, ingredientInfos);
        setWantModify(false);
    };

    return (
        <li className='ingredient'>
            <div className="ingredient-info">
                <h3>{name}</h3>
                <h6>Pour la recette: {recipeName}</h6>
                {wantModify
                    ? <form onSubmit={handleSubmit}>
                        <div className="quantity">
                            <label htmlFor="quantity">Quantité:</label>
                            <input type="text" name="quantity" id="quantity" value={ingredientInfos.quantity} onChange={handleChange} />
                        </div>
                        <div className="date">
                            <label htmlFor="date">Date: </label>
                            <input type="date" name="date" id="date" value={ingredientInfos.date} onChange={handleChange} />
                        </div>
                        <button type="submit">Enregistrer</button>
                    </form>
                    : <>
                        <p>Quantité: {quantity}</p>
                        <p>Date: {date}</p>
                        <button type="button" onClick={() => setWantModify(true)}>Modifier</button>
                    </>
                }
            </div>
            <button type="button" onClick={() => removeIngredient(id)}>Supprimer</button>
        </li>
    )
}

export default Ingredient