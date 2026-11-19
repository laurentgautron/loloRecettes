import './RecipeCard.css';
import useToggle from '../../../../hooks/useToggle';
import Modal from '../../../../components/Modal/Modal';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router';

function RecipeCard(recipe) {
    const { isOpen, open, close } = useToggle();

    const navigate = useNavigate();

    return (
        <div className='recipe-card'>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} onClick={()=>navigate(`/detail/${recipe.idMeal}`)}/>
            <div className="title-action">
                <h3>{recipe.strMeal}</h3>
                <button type='button' onClick={open} className='bi bi-calendar-check'></button>
            </div>
            {isOpen && <Modal recipe={recipe} onClose={close} /> }
        </div>
    )
}

export default RecipeCard
