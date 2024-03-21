import mongoose from 'mongoose';
import foodSchema from './IngredientCombinition';
import ingredientsSchema from './Ingredients';
const URI = 'mongodb+srv://yunkai:w99746@cluster0.td2a16e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
export default async function run() {
    try {
        await mongoose.connect(URI);
        const foodModel = mongoose.model('food', foodSchema);
        const ingredientsModel = mongoose.model('ingredients', ingredientsSchema);
        console.log('Pinged your deployment. You successfully connected to MongoDB!');
    }
    finally {
    }
}
run().catch(console.dir);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9jb25uZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sUUFBUSxNQUFNLFVBQVUsQ0FBQztBQUNoQyxPQUFPLFVBQVUsTUFBTSx5QkFBeUIsQ0FBQztBQUNqRCxPQUFPLGlCQUFpQixNQUFNLGVBQWUsQ0FBQztBQUU5QyxNQUFNLEdBQUcsR0FDUCx3R0FBd0csQ0FBQztBQVUzRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssVUFBVSxHQUFHO0lBQy9CLElBQUk7UUFHRixNQUFNLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUIsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDckQsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBSTFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztLQUMvRTtZQUFTO0tBR1Q7QUFDSCxDQUFDO0FBQ0QsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyJ9