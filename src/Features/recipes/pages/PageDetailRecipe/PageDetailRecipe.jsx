import { useNavigate, useParams } from "react-router";
import "./PageDetailRecipe.css";
import { useEffect, useState } from "react";
import { getMealById } from "../../../../services/mealDbApi";
import Modal from "../../../../components/Modal/Modal";
import useToggle from "../../../../hooks/useToggle";

function PageDetailRecipe() {
    const { idMeal } = useParams();
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true);
    const { isOpen, open, close } = useToggle();

    const navigate = useNavigate();

    useEffect(() => {
        getMealById(idMeal)
            .then(r => setRecipe(r))
            .catch(error => console.log("Erreur [PageDetailRecipe]: ", error))
            .finally(() => setLoading(false))
    }, [])

    return (
        !loading
            ? <div className="detail-recipe">
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h2>{recipe.strMeal}</h2>
                <p>{recipe.strInstructions}</p>
                <div className="btnAction">
                    <button type="button" onClick={() => navigate('/')}>Retour</button>
                    <button type="button" onClick={open}>Ajouter au planning</button>
                </div>
                {isOpen && recipe && <Modal recipe={recipe} onClose={close} />}
            </div>
            : <p>Chargement</p>
    )
}

export default PageDetailRecipe;
