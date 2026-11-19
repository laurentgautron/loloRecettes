import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [recipeName, setRecipeName] = useState('');

    function handleChange(ev) {
        setRecipeName(ev.target.value);
        onSearch(ev.target.value);
    }

    return (
        <div className='search-bar'>
            <input
                type="text"
                name="recipe-name"
                id="search"
                placeholder='Rechercher par recette'
                value={recipeName}
                onChange={(ev) => handleChange(ev)} />
        </div>
    )
}

export default SearchBar;
