import mongoose from 'mongoose';

const ingredientsSchema = new mongoose.Schema({
  name: String,
});
export default ingredientsSchema;
