import { useNavigate, useParams } from "react-router";
import "./DetailRecipe.css";
import { useEffect, useState } from "react";
import { getMealById } from "../../../../services/mealDBApi.js";

function DetailRecipe() {
    const { idMeal } = useParams();
    const [meal, setMeal] = useState(null)
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        getMealById(idMeal)
            .then(m => setMeal(m))
            .catch(error => console.log("Erreur [DetailRecipe]: ", error))
            .finally(() => setLoading(false))
    }, [])

    return (
        !loading
            ? <div className="detail-recipe">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h2>{meal.strMeal}</h2>
                <p>{meal.strInstructions}</p>
                <div className="btnAction">
                    <button type="button" onClick={() => navigate('/')}>Retour</button>
                    <button type="button">Ajouter au planning</button>
                </div>
            </div>
            : <p>Chargement</p>
    )
}

export default DetailRecipe