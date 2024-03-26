import { readJsonFile } from './readJSONFile';
async function cookFood(foodName) {
    const foods = await readJsonFile('food.JSON');
    const ingredients = await readJsonFile('Ingredients.JSON');
    const food = foods.find(f => f.name.toLowerCase() === foodName.toLowerCase());
    if (!food) {
        console.log('Unknown recipe.');
        return;
    }
    let allIngredientsAvailable = true;
    for (let ingredientName of food.ingredients.flat()) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90b3duL2Nvb2svY29va2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHOUMsS0FBSyxVQUFVLFFBQVEsQ0FBQyxRQUFnQjtJQUVwQyxNQUFNLEtBQUssR0FBVyxNQUFNLFlBQVksQ0FBTyxXQUFXLENBQUMsQ0FBQztJQUM1RCxNQUFNLFdBQVcsR0FBaUIsTUFBTSxZQUFZLENBQWEsa0JBQWtCLENBQUMsQ0FBQztJQUdyRixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUU5RSxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLE9BQU87S0FDVjtJQUdELElBQUksdUJBQXVCLEdBQUcsSUFBSSxDQUFDO0lBQ25DLEtBQUssSUFBSSxjQUFjLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUU7WUFDL0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUNyRCx1QkFBdUIsR0FBRyxLQUFLLENBQUM7WUFDaEMsTUFBTTtTQUNUO0tBQ0o7SUFFRCxJQUFJLHVCQUF1QixFQUFFO1FBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxRQUFRLGtCQUFrQixJQUFJLENBQUMsV0FBVyxpQkFBaUIsSUFBSSxDQUFDLFNBQVMsV0FBVyxDQUFDLENBQUM7S0FDL0c7U0FBTTtRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxRQUFRLDhCQUE4QixDQUFDLENBQUM7S0FDdEU7QUFDTCxDQUFDIn0=