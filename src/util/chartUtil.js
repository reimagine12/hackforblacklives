const getCategoryById = (categories, id) => {
    return categories.find(category => category.id === id);
}

export default getCategoryById;