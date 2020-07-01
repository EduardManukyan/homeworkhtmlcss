const meal = {

  "weight-1": 300,
  'calorie-2': 100,
  'weight-2': 100,
  'isOverEat': false,
  "calorie-1": 300,
  'food-2': 'salad',
  'isJunkFood': true,
  "food-1": 'rice',
};

const normalizeMeal = (meal) => {
  let result = {}
  const unfilteredFood = {};
  Object.keys(meal).forEach((item) => {
    const indexOfSlash = item.lastIndexOf('-');
    if (indexOfSlash !== -1) {
      const numberAfterSlash = item.slice(indexOfSlash + 1, item.length);
      const stringBeforeSlash = item.slice(0, indexOfSlash);

      if (unfilteredFood.hasOwnProperty(numberAfterSlash)) {
        unfilteredFood[numberAfterSlash][stringBeforeSlash] = meal[item];
      } else {
        unfilteredFood[numberAfterSlash] = {
          [stringBeforeSlash]: meal[item],
        }
      }

    } else {
      result[item] = meal[item];
    }

  })
  result.foods = Object.values(unfilteredFood);
  result={...result,... totals(result.foods)}

  return result;

}

function totals(arr) {
  let totalWeight = 0;
  let totalCalories = 0;
  arr.forEach((arrItem) => {
    totalWeight += +arrItem.weight;
    totalCalories += +arrItem.calorie;


  })
  return {
    totalCalories,
    totalWeight,
  }
}


console.log(normalizeMeal(meal))
/**
 * {
 *   isJunkFood: true,
      isOverEat: false,
      foods: [
        {
          food: 'rice',
          weight: 200,
          calories: 100
        },
        {
          food: 'salad',
          weight: 100,
          calories: 200
        }
      ],
      totalCalories: 300,
      totalWeight: 300
 * }
 */