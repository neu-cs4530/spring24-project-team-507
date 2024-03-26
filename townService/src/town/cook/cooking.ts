import { Food } from './interface/IFood';
import { Ingredient } from './interface/IIngredient';
import readJsonFile from './readJSONFile';

export default class Stove {
  private _grids: (Ingredient | '_')[][];

  private _finalFood: Food | '_';

  private _foods: Food[];

  constructor(grids: string[][], finalFood: string) {
    this._grids = [
      ['_', '_'],
      ['_', '_'],
    ];
    this._finalFood = '_';
    this._foods = [];
    this.initializeFoods();
  }

  async initializeFoods(): Promise<void> {
    this._foods = await readJsonFile<Food>('food.json');
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
  async cookFood(): Promise<string> {
    const stoveIngredients = this._grids.flat().filter(ingredient => ingredient !== null) as Ingredient[];

    for (const food of this._foods) {
      const requiredIngredients = food.ingredients;
      if (this.isRecipeMatch(stoveIngredients, requiredIngredients)) {
        // Empty the stove and prepare it for next use
        this.resetStove(); 
        return `Cooked ${food.name}. Enhancement: ${food.enhancement}, Time Limit: ${food.timeLimit} seconds.`;
      }
    }
    this.resetStove(); // The stove will also need to be reset if there are no matching recipes
    return 'No matching recipe found.';
  }

  private isRecipeMatch(stoveIngredients: Ingredient[], requiredIngredients: string[] | string[][]): boolean {
    // check requiredIngredients type
    let allIngredients: string[] = [];
  
    if (requiredIngredients[0] instanceof Array) {
      // if requiredIngredients is string[][]
      allIngredients = (requiredIngredients as string[][]).flat();
    } else {
      // is requiredIngredients is string[]
      allIngredients = requiredIngredients as string[];
    }
  
    return allIngredients.every(ingredientName =>
      stoveIngredients.some(ingredient => ingredient.name.toLowerCase() === ingredientName.toLowerCase())
    ) && stoveIngredients.length === allIngredients.length;
  }
  
  

  private resetStove(): void {
    this._grids = [
      ['_', '_'],
      ['_', '_'],
    ];
  }
}
