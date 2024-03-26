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
      // console.log('The stove is full.');
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
      // console.log('The ingredient is not on the stove.');
    }
  }

  /**
   * Match the ingredients in the stove to a recipe and cook the food
   * @param stove - An array of ingredients available in the stove.
   * @returns A Promise that resolves to void.
   */
  async cookFood(stove: Ingredient[]): Promise<void> {
    const recipe: Food[] = await readJsonFile('Food.JSON');
    const food: Food | undefined = recipe.find(r => {
      const recipeIngredientsSet = new Set(r.ingredients.flat());
      const stoveIngredientsSet = new Set(stove);
      return JSON.stringify([...recipeIngredientsSet]) === JSON.stringify([...stoveIngredientsSet]);
    });

    // Check if there are duplicated ingredients in the stove
    let counter = 0;
    const ingredientCounts = new Map<Ingredient, number>();
    for (const ingredient of stove) {
      const count = ingredientCounts.get(ingredient) || 0;
      ingredientCounts.set(ingredient, count + 1);
      if (count + 1 > 1) {
        counter++;
      }
    }

    if (food) {
      // Increase the cooking time accroding to the number of duplicated ingredients
      food.timeLimit += counter * 30;
      this._finalFood = food;
    } else {
      this._finalFood = recipe.find(f => f.name === 'Unknown recipe') || '_';
    }

    // Clear the stove after cooking
    this._grids = [
      ['_', '_'],
      ['_', '_'],
    ];
  }
}
