import readJsonFile from './readJSONFile';
export default class Stove {
    _grids;
    _finalFood;
    _foods;
    constructor(grids, finalFood) {
        this._grids = [
            ['_', '_'],
            ['_', '_'],
        ];
        this._finalFood = '_';
        this._foods = [];
        this.initializeFoods();
    }
    async initializeFoods() {
        this._foods = await readJsonFile('food.json');
    }
    get grids() {
        return this._grids;
    }
    get finalFood() {
        return this._finalFood;
    }
    addIngredient(ingrendient) {
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
            }
            else {
                throw new Error('The stove is full.');
            }
        }
        catch (error) {
            console.log('The stove is full.');
        }
    }
    removeIngredient(ingrendient) {
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
            }
            else {
                throw new Error('The ingredient is not on the stove.');
            }
        }
        catch (error) {
            console.log('The ingredient is not on the stove.');
        }
    }
    async cookFood() {
        const stoveIngredients = this._grids.flat().filter(ingredient => ingredient !== null);
        for (const food of this._foods) {
            const requiredIngredients = food.ingredients;
            if (this.isRecipeMatch(stoveIngredients, requiredIngredients)) {
                this.resetStove();
                return `Cooked ${food.name}. Enhancement: ${food.enhancement}, Time Limit: ${food.timeLimit} seconds.`;
            }
        }
        this.resetStove();
        return 'No matching recipe found.';
    }
    isRecipeMatch(stoveIngredients, requiredIngredients) {
        let allIngredients = [];
        if (requiredIngredients[0] instanceof Array) {
            allIngredients = requiredIngredients.flat();
        }
        else {
            allIngredients = requiredIngredients;
        }
        return allIngredients.every(ingredientName => stoveIngredients.some(ingredient => ingredient.name.toLowerCase() === ingredientName.toLowerCase())) && stoveIngredients.length === allIngredients.length;
    }
    resetStove() {
        this._grids = [
            ['_', '_'],
            ['_', '_'],
        ];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b3duL2Nvb2svY29va2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUUxQyxNQUFNLENBQUMsT0FBTyxPQUFPLEtBQUs7SUFDaEIsTUFBTSxDQUF5QjtJQUUvQixVQUFVLENBQWE7SUFFdkIsTUFBTSxDQUFTO0lBRXZCLFlBQVksS0FBaUIsRUFBRSxTQUFpQjtRQUM5QyxJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1osQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ1YsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO1NBQ1gsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLGVBQWU7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBTyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFHRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztJQUdELGFBQWEsQ0FBQyxXQUF1QjtRQUNuQyxJQUFJO1lBQ0YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDcEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFB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