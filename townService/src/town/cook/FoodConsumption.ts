import { PlayerState, PlayerStatus } from '../../types/CoveyTownSocket';
import readJsonFile from './readJSONFile';
import { Food } from './interface/IFood';
import PlayerController from '../../../../frontend/src/classes/PlayerController'

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
