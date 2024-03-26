import { Food } from './interface/IFood';
import { Ingredient } from './interface/IIngredient';
import readJsonFile from './ReadJSONFile';

// Define functions to match and cook food
async function cookFood(foodName: string): Promise<void> {
  // Read food and ingredient data from JSON files
  const foods: Food[] = await readJsonFile<Food>('food.JSON');
  const ingredients: Ingredient[] = await readJsonFile<Ingredient>('Ingredients.JSON');

  // Find the specified food
  const food = foods.find(f => f.name.toLowerCase() === foodName.toLowerCase());

  if (!food) {
    console.log('Unknown recipe.');
    return;
  }

  // Check if each ingredient required is in the ingredients list
  let allIngredientsAvailable = true;
  for (const ingredientName of food.ingredients.flat()) {
    if (!ingredients.some(i => i.name.toLowerCase() === ingredientName.toLowerCase())) {
      console.log(`Missing ingredient: ${ingredientName}`);
      allIngredientsAvailable = false;
      break;
    }
  }

  if (allIngredientsAvailable) {
    // There are enough raw materials, and the gain effect and time limit of the food are output.
    console.log(
      `Cooked ${foodName}. Enhancement: ${food.enhancement}, Time Limit: ${food.timeLimit} seconds.`,
    );
  } else {
    console.log(`Cannot cook ${foodName} due to missing ingredients.`);
  }
}
