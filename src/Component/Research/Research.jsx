import { useSearchParams } from 'react-router';
import './Research.css';
import { useContext, useState } from 'react';
import { AppContext } from '../../Context/AppContext';

function Research() {
    const [recipeName, setRecipeName] = useState('');
    const { setMealName } = useContext(AppContext);

    function handleChange(ev) {
        setRecipeName(ev.target.value);
        setMealName(ev.target.value);
    }

    return (
        <div>
            <input 
            type="text"
            name="recipe-name"
            id="research"
            placeholder='Rechercher par recette'
            value={recipeName}
            onChange={(ev) => handleChange(ev)}/>
        </div>
    )
}

export default Research