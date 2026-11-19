import "./Categories.css";
import Category from "../Category/Category";
import { useQuery } from "@tanstack/react-query";
import { categoriesQuery } from "../../queries/recipesQueries";

function Categories({ selectedCategory, onCategorySelect }) {
    const { data, isPending, isError } = useQuery(categoriesQuery());
    const categories = data ?? [];

    if (isPending) return <p>Chargement des catégories…</p>;
    if (isError) return <p>Impossible de charger les catégories</p>;

    return (
        <ul className="category-list">
            {categories.length > 0
                ? categories.map((category) => {
                    return <Category
                        key={category.idCategory}
                        category={category}
                        isSelected={selectedCategory === category.strCategory}
                        onSelect={onCategorySelect}
                    />
                })
                : <p>Pas de catégories</p>
            }
        </ul>
    )
}

export default Categories