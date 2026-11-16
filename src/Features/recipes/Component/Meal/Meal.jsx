import './Meal.css';
import useToggle from '../../../../hooks/useToggle';
import Modale from '../../../../Component/Modale/Modale';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useNavigate } from 'react-router';

function Meal({ ...meal }) {
    const { value, open, close } = useToggle();

    const navigate = useNavigate();

    return (
        <div className='meal-card'>
            <img src={meal.strMealThumb} alt={meal.strMeal} onClick={()=>navigate(`/detail/${meal.idMeal}`)}/>
            <div className="title-action">
                <h3>{meal.strMeal}</h3>
                <button type='button' onClick={open} className='bi bi-calendar-check'></button>
            </div>
            {value && <Modale meal={meal} onClose={close} /> }
        </div>
    )
}

export default Meal