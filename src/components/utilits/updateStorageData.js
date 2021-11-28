const updateStorageData = ({
  idMeal,
  strMeal,
  strInstructions,
  strArea,
  strCategory,
  strMealThumb,
}) => {
  const dishData = {
    idMeal,
    strMeal,
    strInstructions,
    strArea,
    strCategory,
    strMealThumb,
  };

  const storageData = JSON.parse(localStorage.getItem('recipes'));
  storageData.push(dishData);

  localStorage.setItem('recipes', JSON.stringify(storageData));

  console.log(JSON.stringify(storageData));
};

export default updateStorageData;
