import { Ingredient } from './interface/IIngredient';

// A users inventory of the ingredients they have available to cook with
export default class Inventory {
  private _ingredients: Ingredient[];

  constructor(ingredients: Ingredient[]) {
    this._ingredients = ingredients;
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
