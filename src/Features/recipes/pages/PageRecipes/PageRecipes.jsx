import './PageRecipes.css';
import Categories from '../../../../Component/Categories/Categories';
import Meal from '../../Component/Meal/Meal';
import { useState, useEffect, useContext } from 'react';
import { getMealCategories, getMealsByCategory, getMealsByName } from '../../../../utils';
import { AppContext } from '../../../../Context/AppContext';

function PagesRecipes() {
    const { mealName } = useContext(AppContext);
    const [categories, setCategories] = useState([]);
    const [selectedMeals, setSelectedMeals] = useState([]);
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        !category ? getMealCategories()
            .then(c => {
                setCategories(c);
                setCategory(c[0].strCategory);
            })
            .catch(error => console.log('Erreur [PageRecipes]: ', error))
            .finally(() => setLoading(false))
            : getMealsByCategory(category)
                .then(m => setSelectedMeals(m))
                .catch(error => console.log('Erreur [PageRecipes]: ', error))
                .finally(() => setLoading(false));
        if (mealName) {
            getMealsByName(mealName)
            .then(m => setSelectedMeals(m))
            .catch(error => console.log('Erreur [PageRecipes]: ', error));
        }
    }, [category, mealName]);

    return (
        <main>
            <Categories categories={categories} onCategorySelect={setCategory} />
            <section>
                <ul className='meals-list'>
                    {loading
                        ? <p>Chargement des recettes</p>
                        : selectedMeals.map((meal) => {
                            return <li key={meal.idMeal}><Meal {...meal} /></li>
                    })}
                </ul>
            </section>
        </main>
    )}
    
export default PagesRecipes