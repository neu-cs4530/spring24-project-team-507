export default class Inventory {
    _ingredients;
    constructor(ingredients) {
        this._ingredients = [
            ingredients[0],
            ingredients[1],
            ingredients[2],
            ingredients[3],
            ingredients[4],
            ingredients[5],
        ];
    }
    get ingredients() {
        return this._ingredients;
    }
    addIngredient(ingredient) {
        if (this._ingredients.length < 6) {
            this._ingredients.push(ingredient);
        }
    }
    removeIngredient(ingredient) {
        const index = this._ingredients.findIndex(i => i._id.$oid === ingredient._id.$oid);
        if (index !== -1) {
            this._ingredients.splice(index, 1);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52ZW50b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Rvd24vY29vay9JbnZlbnRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFTO0lBQ3BCLFlBQVksQ0FBMkU7SUFFL0YsWUFBWSxXQUF5QjtRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZCxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2QsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNkLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDZCxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2QsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUNmLENBQUM7SUFDSixDQUFDO0lBS0QsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFNRCxhQUFhLENBQUMsVUFBc0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBTUQsZ0JBQWdCLENBQUMsVUFBc0I7UUFDckMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25GLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNwQztJQUNILENBQUM7Q0FDRiJ9