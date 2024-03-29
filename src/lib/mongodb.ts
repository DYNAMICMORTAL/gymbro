// import { MongoClient, Db } from 'mongodb';

// const URI = process.env.MONDODB_URI
// const options = {}

// declare global {
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }
// if (!URI) throw new Error('Please define the MONGODB_URI environment variable inside .env.local');

// let client = new MongoClient(URI, options);
// let clientPromise

// if (process.env.NODE_ENV !== 'production') {
//   if(!global._mongoClientPromise) {
//     global._mongoClientPromise = client.connect();
//   }

//   clientPromise = global._mongoClientPromise;
// } else {
//   clientPromise = client.connect();
// }

// export default clientPromise;







import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://aminvasudev6:hC31pJ5g4ILOvrG6@gymbrodatabase.pmbrumy.mongodb.net/?retryWrites=true&w=majority&appName=gymbroDatabase";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function getDbConnection() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return client; // return the client object
  } catch (error) {
    console.dir(error);
    throw error;
  }
}