import { Food } from './interface/IFood';
import { Ingredient } from './interface/IIngredient';

// A users inventory of the ingredients they have available to cook with with a maximum of 6 ingredients
export default class Inventory {
  private _grids: [
    Ingredient | Food,
    Ingredient | Food,
    Ingredient | Food,
    Ingredient | Food,
    Ingredient | Food,
    Ingredient | Food,
  ];

  constructor(grids: Ingredient[] | Food[]) {
    this._grids = [grids[0], grids[1], grids[2], grids[3], grids[4], grids[5]];
  }

  /**
   * Get the ingredients in the inventory
   */
  get grids(): (Ingredient | Food)[] {
    return this._grids;
  }

  /**
   * Add an ingredient to the inventory
   * @param grid The ingredient to add
   */
  addIngredient(grid: Ingredient | Food): void {
    if (this._grids.length < 6) {
      this._grids.push(grid);
    }
  }

  /**
   * Remove an ingredient from the inventory
   * @param grid The ingredient to remove
   */
  removeIngredient(grid: Ingredient | Food): void {
    const index = this._grids.findIndex(i => i._id.$oid === grid._id.$oid);
    if (index !== -1) {
      this._grids.splice(index, 1);
    }
  }
}
