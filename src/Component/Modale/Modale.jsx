import './Modale.css';

function Modale({meal, onClose}) {
    return (
        <div className='modale-overlay'>
            <div className="modale-content">
                <button type="button" onClick={onClose}>x</button>
                <h2>{meal.strMeal}</h2>
            </div>
        </div>
    )
}

export default Modale