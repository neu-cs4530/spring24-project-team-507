import { Food } from './interface/IFood';
import { Ingredient } from './interface/IIngredient';
import readJsonFile from './ReadJSONFile';

export default class Stove {
  private _grids: (Ingredient | '_')[][];

  private _finalFood: Food | '_';

  constructor(grids: string[][], finalFood: string) {
    this._grids = [
      ['_', '_'],
      ['_', '_'],
    ];
    this._finalFood = '_';
  }

  get grids(): (Ingredient | '_')[][] {
    return this._grids;
  }

  get finalFood(): Food | '_' {
    return this._finalFood;
  }

  // Add an ingredient to the stove's grid
  addIngredient(ingrendient: Ingredient): void {
    try {
      if (this._grids.flat().includes('_')) {
        for (let i = 0; i < this._grids.length; i++) {
          for (let j = 0; j < this._grids[i].length; j++) {
            if (this._grids[i][j] === '_') {
              this._grids[i][j] = ingrendient;
              return;
            }
          }
        }

        this.removeIngredient(ingrendient);
      } else {
        throw new Error('The stove is full.');
      }
    } catch (error) {
      console.log('The stove is full.');
    }
  }

  // Remove an ingredient from the stove's grid
  removeIngredient(ingrendient: Ingredient): void {
    try {
      if (this._grids.flat().includes(ingrendient)) {
        for (let i = 0; i < this._grids.length; i++) {
          for (let j = 0; j < this._grids[i].length; j++) {
            if (this._grids[i][j] === ingrendient) {
              this._grids[i][j] = '_';
              return;
            }
          }
        }
      } else {
        throw new Error('The ingredient is not on the stove.');
      }
    } catch (error) {
      console.log('The ingredient is not on the stove.');
    }
  }

  // Match the ingredients in the stove to a recipe and cook the food
  async cookFood(foodName: string, stove: Ingredient[]): Promise<void> {
    // Read food and ingredient data from JSON files
    const foods: Food[] = await readJsonFile<Food>('food.JSON');

    // Find the specified food
    const food = foods.find(f => f.name.toLowerCase() === foodName.toLowerCase());

    if (!food) {
      console.log('Unknown recipe.');
      return;
    }

    // Check if each ingredient required is in the stove
    let allIngredientsAvailable = true;
    for (const ingredientName of food.ingredients.flat()) {
      if (!stove.some(i => i.name.toLowerCase() === ingredientName.toLowerCase())) {
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
      this._finalFood = food;
    } else {
      console.log(`Cannot cook ${foodName} due to missing ingredients.`);
    }

    this._grids = [
      ['_', '_'],
      ['_', '_'],
    ];
  }
}
