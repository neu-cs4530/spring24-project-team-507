import { Food } from './interface/IFood';
import { Ingredient } from './interface/IIngredient';
import readJsonFile from './ReadJSONFile';

export default class Stove {
  private _grids: (Ingredient | '_')[][];

  private _finalFood: Food | '_';

  private _extraTime: number;

  constructor() {
    this._grids = [
      ['_', '_'],
      ['_', '_'],
    ];
    this._finalFood = '_';
    this._extraTime = 0;
  }

  get grids(): (Ingredient | '_')[][] {
    return this._grids;
  }

  get finalFood(): Food | '_' {
    return this._finalFood;
  }

  get extraTime(): number {
    return this._extraTime;
  }

  set extraTime(time: number) {
    this._extraTime = time;
  }

  /**
   * Adds an ingredient to the stove grid.
   * @param ingredient - The ingredient to be added.
   */
  addIngredient(ingrendient: Ingredient): void {
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
  }

  /**
   * Removes the specified ingredient from the stove.
   * @param ingredient - The ingredient to be removed.
   */
  removeIngredient(ingrendient: Ingredient): void {
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
  }

  /**
   * Cooks food using the provided stove ingredients.
   * @param stove - An array of ingredients available in the stove.
   * @returns A Promise that resolves to void.
   */
  cookFood(): void {
    const recipe: Food[] = readJsonFile('Food.JSON');

    const gridIngredientName: string[] = [];
    for (let i = 0; i < this._grids.length; i++) {
      for (let j = 0; j < this._grids[i].length; j++) {
        if (this._grids[i][j] !== '_') {
          gridIngredientName.push((this._grids[i][j] as Ingredient).name);
        }
      }
    }

    // Compare the stove ingredients with the recipe to see any match
    const food: Food | undefined = recipe.find(r => {
      const recipeIngredientsSet = new Set(r.ingredients.flat().sort());
      const stoveIngredientsSet = new Set(gridIngredientName.sort());
      return JSON.stringify([...recipeIngredientsSet]) === JSON.stringify([...stoveIngredientsSet]);
    });

    // Check if there are duplicated ingredients in the stove
    let counter = 0;
    const ingredientCounts = new Map<Ingredient, number>();
    for (const ingredient of this._grids as unknown as Ingredient[]) {
      const count = ingredientCounts.get(ingredient) || 0;
      ingredientCounts.set(ingredient, count + 1);
      if (count + 1 > 1) {
        counter++;
      }
    }

    if (food) {
      // Increase the cooking time accroding to the number of duplicated ingredients
      this._extraTime += counter * 30;
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
