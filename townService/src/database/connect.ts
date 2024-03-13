import { MongoClient, ServerApiVersion } from 'mongodb';
import mongoose from 'mongoose';
import foodSchema  from './food.js';
import ingredientsSchema  from './ingredients.js';

const uri = "mongodb+srv://yunkai:w99746@cluster0.td2a16e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//     }
// });


export async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
    //await client.connect();
    await mongoose.connect(uri);
    const foodModel = mongoose.model("food", foodSchema);
    const ingredientsModel = mongoose.model("food", ingredientsSchema);


      // Send a ping to confirm a successful connection
    //await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //await client.close();
    }
}
run().catch(console.dir);