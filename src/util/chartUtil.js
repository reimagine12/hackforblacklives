const getCategoryById = (categories, id) => categories.find(category => category.id === id);

export default getCategoryById;