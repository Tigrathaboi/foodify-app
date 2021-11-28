const createStorageData = ({
  idMeal,
  strMeal,
  strInstructions,
  strArea,
  strCategory,
  strMealThumb,
}) => {
  const mealData = {
    idMeal,
    strMeal,
    strInstructions,
    strArea,
    strCategory,
    strMealThumb,
  };
  const recipeStore = new Array(mealData);
  localStorage.setItem('recipes', JSON.stringify(recipeStore));
  
  console.log(JSON.stringify(recipeStore));
};

export default createStorageData;
