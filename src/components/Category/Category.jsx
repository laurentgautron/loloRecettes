function Category({ category, isSelected, onSelect }) {
    return (
        <li
            className={isSelected ? 'selected' : ''}
            onClick={() => onSelect(category.strCategory)}
        >
            {category.strCategory}
        </li>
    )
}

export default Category
