import { PlayerState, PlayerStatus } from '../../types/CoveyTownSocket';
import readJsonFile from './ReadJSONFile';
import { Food } from './interface/IFood';

class FoodConsumptionService {
  private _foods: Food[];

  constructor() {
    this._foods = [];
    this.initializeFoods();
  }

  async initializeFoods() {
    this._foods = await readJsonFile('food.json');
  }

  // havn't finish, the following is food-eating method, should also connect yo enhancement
}
