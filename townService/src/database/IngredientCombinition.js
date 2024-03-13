import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: String,
  ingredients: Array,
  enhancement: String,
  timeLimit: Number,
});
export default foodSchema;
