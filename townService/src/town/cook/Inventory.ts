import { Food } from './interface/IFood';
import { Ingredient } from './interface/IIngredient';
import readJsonFile from './readJSONFile';

// A users inventory of the ingredients they have available to cook with with a maximum of 6 ingredients

export default class Inventory {
  private _ingredients: [Ingredient, Ingredient, Ingredient, Ingredient, Ingredient, Ingredient];

  constructor(ingredients: Ingredient[]) {
    this._ingredients = [
      ingredients[0],
      ingredients[1],
      ingredients[2],
      ingredients[3],
      ingredients[4],
      ingredients[5],
    ];
  }

  /**
   * Get the ingredients in the inventory
   */
  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  /**
   * Add an ingredient to the inventory
   * @param ingredient The ingredient to add
   */
  addIngredient(ingredient: Ingredient): void {
    this._ingredients.push(ingredient);
  }

  /**
   * Remove an ingredient from the inventory
   * @param ingredient The ingredient to remove
   */
  removeIngredient(ingredient: Ingredient): void {
    const index = this._ingredients.findIndex(i => i._id.$oid === ingredient._id.$oid);
    if (index !== -1) {
      this._ingredients.splice(index, 1);
    }
  }
}
