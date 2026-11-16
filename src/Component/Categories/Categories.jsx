import { useEffect, useState } from "react";
import "./Categories.css";
import { getMealsByCategory } from "../../utils";

function Categories({ categories, onCategorySelect }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        if (categories && categories.length > 0) {
            setSelectedCategory(categories[0].strCategory);
            onCategorySelect(categories[0].strCategory);
        }
            
    }, [categories]);

    function handleClick(category) {
        setSelectedCategory(category);
        onCategorySelect(category);
    }

    return (
        <ul className="category-list">
            {categories
                ? categories.map((category) => {
                    return <li
                        key={category.idCategory}
                        className={
                            selectedCategory === category.strCategory
                            ? "selected"
                            : null
                        }
                        onClick={() => handleClick(category.strCategory)}
                    >
                        {category.strCategory}
                    </li>
                })
                : <p>Pas de catégories</p>
            }
        </ul>
    )
}

export default Categories