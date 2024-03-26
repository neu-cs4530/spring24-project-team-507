import readJsonFile from './readJSONFile';
async function cookFood(foodName) {
    const foods = await readJsonFile('food.JSON');
    const ingredients = await readJsonFile('Ingredients.JSON');
    const food = foods.find(f => f.name.toLowerCase() === foodName.toLowerCase());
    if (!food) {
        console.log('Unknown recipe.');
        return;
    }
    let allIngredientsAvailable = true;
    for (const ingredientName of food.ingredients.flat()) {
        if (!ingredients.some(i => i.name.toLowerCase() === ingredientName.toLowerCase())) {
            console.log(`Missing ingredient: ${ingredientName}`);
            allIngredientsAvailable = false;
            break;
        }
    }
    if (allIngredientsAvailable) {
        console.log(`Cooked ${foodName}. Enhancement: ${food.enhancement}, Time Limit: ${food.timeLimit} seconds.`);
    }
    else {
        console.log(`Cannot cook ${foodName} due to missing ingredients.`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b3duL2Nvb2svY29va2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLFlBQVksTUFBTSxnQkFBZ0IsQ0FBQztBQUcxQyxLQUFLLFVBQVUsUUFBUSxDQUFDLFFBQWdCO0lBRXRDLE1BQU0sS0FBSyxHQUFXLE1BQU0sWUFBWSxDQUFPLFdBQVcsQ0FBQyxDQUFDO0lBQzVELE1BQU0sV0FBVyxHQUFpQixNQUFNLFlBQVksQ0FBYSxrQkFBa0IsQ0FBQyxDQUFDO0lBR3JGLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBRTlFLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsT0FBTztLQUNSO0lBR0QsSUFBSSx1QkFBdUIsR0FBRyxJQUFJLENBQUM7SUFDbkMsS0FBSyxNQUFNLGNBQWMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3BELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxjQUFjLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRTtZQUNqRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELHVCQUF1QixHQUFHLEtBQUssQ0FBQztZQUNoQyxNQUFNO1NBQ1A7S0FDRjtJQUVELElBQUksdUJBQXVCLEVBQUU7UUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FDVCxVQUFVLFFBQVEsa0JBQWtCLElBQUksQ0FBQyxXQUFXLGlCQUFpQixJQUFJLENBQUMsU0FBUyxXQUFXLENBQy9GLENBQUM7S0FDSDtTQUFNO1FBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLFFBQVEsOEJBQThCLENBQUMsQ0FBQztLQUNwRTtBQUNILENBQUMifQ==