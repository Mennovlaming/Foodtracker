 export const totalValues = {
    kcal: 0,
    protein: 0
  };
  
  export const energy = document.querySelector('#totalValues li:first-of-type');
  export const protein = document.querySelector('#totalValues li:nth-of-type(2)');
  export const foodList = document.getElementById('foodList');
  export const resetButton = document.querySelector('#reset');
  export const totalValuesUl = document.querySelector('#totalValues');
  
  export function addNutrition(nutritionInfo) {

      totalValues.kcal += nutritionInfo.kcal;
      totalValues.protein += nutritionInfo.protein;

      energy.innerHTML = `${totalValues.kcal} kcal`;
      protein.innerHTML = `${totalValues.protein}g eiwit`;
  }
  
  export function resetTotals() {
    
      totalValues.kcal = 0;
      totalValues.protein = 0;

      energy.innerHTML = `${totalValues.kcal} kcal`;
      protein.innerHTML = `${totalValues.protein}g eiwit`;
  }
  
  resetButton.addEventListener('click', resetTotals);
