import Stove from './Stove';
import { Ingredient } from './interface/IIngredient';
import readJsonFile from './ReadJSONFile';
import { Food } from './interface/IFood';

let stove = new Stove();
let ingredient: Ingredient[] = [];
ingredient = readJsonFile('Ingredients.JSON');
let food: Food[] = [];
food = readJsonFile('Food.JSON');
const [tomato, egg, mushroom, meat, milk, rice, coffeeBean, soySauce] = ingredient;
const [
  coffee,
  latte,
  meatSkewer,
  omelete,
  eggFiredRice,
  pudding,
  friedRice,
  risotto,
  unknownRecipe,
] = food;

describe('addIngredient', () => {
  beforeEach(() => {
    stove = new Stove();
  });
  it('should add two ingredients to the first two grids', () => {
    stove.addIngredient(tomato);
    stove.addIngredient(mushroom);
    expect(stove.grids).toEqual([
      [tomato, mushroom],
      ['_', '_'],
    ]);
  });
  it('should add duplicate ingredients to the first two grids', () => {
    stove.addIngredient(tomato);
    stove.addIngredient(tomato);
    expect(stove.grids).toEqual([
      [tomato, tomato],
      ['_', '_'],
    ]);
  });
  it('should not add more than four ingredients', () => {
    stove.addIngredient(tomato);
    stove.addIngredient(egg);
    stove.addIngredient(mushroom);
    stove.addIngredient(meat);
    expect(() => stove.addIngredient(milk)).toThrowError('The stove is full.');
    expect(stove.grids).toEqual([
      [tomato, egg],
      [mushroom, meat],
    ]);
  });
});

describe('removeIngredient', () => {
  beforeEach(() => {
    stove = new Stove();
  });
  it('should remove the ingredient from the grid', () => {
    stove.addIngredient(tomato);
    stove.removeIngredient(tomato);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should not remove the ingredient from the grid if it is not present', () => {
    stove.addIngredient(tomato);
    expect(() => stove.removeIngredient(egg)).toThrowError('The ingredient is not on the stove.');
    expect(stove.grids).toEqual([
      [tomato, '_'],
      ['_', '_'],
    ]);
  });
});

describe('recipeMatching', () => {
  beforeEach(() => {
    stove = new Stove();
  });
  it('should have unknown food if the ingredients are not matching any recipe', () => {
    stove.addIngredient(egg);
    stove.addIngredient(milk);
    stove.addIngredient(coffeeBean);
    stove.addIngredient(mushroom);
    stove.cookFood();
    expect(stove.finalFood).toEqual(unknownRecipe);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should have latte if the ingredients are matching latte recipe', () => {
    stove.addIngredient(milk);
    stove.addIngredient(coffeeBean);
    stove.cookFood();
    expect(stove.finalFood).toEqual(latte);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should have coffee if the ingredients are matching coffee recipe', () => {
    stove.addIngredient(coffeeBean);
    stove.cookFood();
    expect(stove.finalFood).toEqual(coffee);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should have meat skewer if the ingredients are matching meat skewer recipe', () => {
    stove.addIngredient(meat);
    stove.cookFood();
    expect(stove.finalFood).toEqual(meatSkewer);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should have omlete if the ingredients are matching omlete recipe', () => {
    stove.addIngredient(egg);
    stove.cookFood();
    expect(stove.finalFood).toEqual(omelete);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should have egg fired rice if the ingredients are matching egg fired rice recipe', () => {
    stove.addIngredient(egg);
    stove.addIngredient(rice);
    stove.addIngredient(soySauce);
    stove.cookFood();
    expect(stove.finalFood).toEqual(eggFiredRice);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should have pudding if the ingredients are matching pudding recipe', () => {
    stove.addIngredient(egg);
    stove.addIngredient(milk);
    stove.cookFood();
    expect(stove.finalFood).toEqual(pudding);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should have fired rice if the ingredients are matching fried rice recipe', () => {
    stove.addIngredient(rice);
    stove.cookFood();
    expect(stove.finalFood).toEqual(friedRice);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should have risotto if the ingredients are matching risotto recipe', () => {
    stove.addIngredient(meat);
    stove.addIngredient(rice);
    stove.addIngredient(tomato);
    stove.cookFood();
    expect(stove.finalFood).toEqual(risotto);
    expect(stove.grids).toEqual([
      ['_', '_'],
      ['_', '_'],
    ]);
  });
  it('should throw an error if the stove is empty', () => {
    expect(() => stove.cookFood()).toThrowError('The stove is empty.');
  });
});

describe('checking duplicated ingreidents effect on extra time', () => {
  beforeEach(() => {
    stove = new Stove();
  });
  it('should have extra time 0 if the ingredients are not duplicated', () => {
    stove.addIngredient(meat);
    stove.addIngredient(rice);
    stove.addIngredient(tomato);
    stove.cookFood();
    expect(stove.finalFood).toEqual(risotto);
    expect(stove.extraTime).toEqual(0);
  });
  it('should have extra time 30 if the ingredients are 1 duplicated for risotto', () => {
    stove.addIngredient(meat);
    stove.addIngredient(meat);
    stove.addIngredient(rice);
    stove.addIngredient(tomato);
    expect(stove.grids).toEqual([
      [meat, meat],
      [rice, tomato],
    ]);
    stove.cookFood();
    expect(stove.finalFood).toEqual(risotto);
    expect(stove.extraTime).toEqual(30);
  });
  it('should have extra time 60 if the ingredients are 2 duplicated for coffee', () => {
    stove.addIngredient(coffeeBean);
    stove.addIngredient(coffeeBean);
    stove.addIngredient(coffeeBean);
    stove.cookFood();
    expect(stove.finalFood).toEqual(coffee);
    expect(stove.extraTime).toEqual(60);
  });
  it('should have extra time 60 if the ingredients are 2 duplicated for latte', () => {
    stove.addIngredient(coffeeBean);
    stove.addIngredient(coffeeBean);
    stove.addIngredient(coffeeBean);
    stove.addIngredient(milk);
    stove.cookFood();
    expect(stove.finalFood).toEqual(latte);
    expect(stove.extraTime).toEqual(60);
  });
});
