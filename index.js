const meal = {
    " weight- 1": 300,
    'calorie-2': 100,
    'weight-2': 100,
    'isOverEat': false,
    "calorie-1": 300,
    'food-2': 'salad',
    'isJunkFood': true,
    "food - 1": 'rice',
};

let arr = Object.entries(meal)

console.log(arr)



let arrMeal = Array.from(meal)

const normalizeMeal = (meal) => {

}

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