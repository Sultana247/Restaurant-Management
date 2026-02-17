const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// middle ware
app.use(cors());
app.use(express.json())


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g6z9mma.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    app.get('/', (req, res)=>{
    res.send('Bistro boss is running')
    });
    // create db and table
    const menuCollection = client.db("BistroBoss").collection("menu");
    const reviewsCollection = client.db("BistroBoss").collection("reviews");
    const cartCollection = client.db("BistroBoss").collection('cart');
    const userCollection = client.db("BistroBoss").collection('users');

// users api
    app.post('/users', async(req, res)=>{
      const user = req.body;
      // check if user exists
      const query = {email: user.email}
      const existinguser = await userCollection.findOne(query)
      if(existinguser){
        return({message: "User already Existed", insertedId: null})
      }
      const result = await userCollection.insertOne(user);
      res.send(result)
    });
    app.get('/users', async(req, res)=>{
      const users = await userCollection.find({}).toArray();
      res.send(users)
    });
    app.delete('/users/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
    app.patch('/users/admin/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const updateDoc={
        $set:{
          role: 'admin'
        }
      }
      const result = await userCollection.updateOne(query, updateDoc);
      res.send(result)
    });
    // check if the user admin or not
    app.get('/users/admin/:id', async(req, res)=>{
      const id = req.params.id;
      
    })
    // Menu api
    app.get('/menu', async(req, res)=>{
        const result = await menuCollection.find({}).toArray();
        res.send(result)
    });
    
    app.get('/reviews', async(req, res)=>{
        const result = await reviewsCollection.find({}).toArray();
        res.send(result)
    });
    // add to cart
    app.post('/carts', async(req, res)=>{
      const query = req.body.cart;
      
      const result = await cartCollection.insertOne(query);
      res.send(result)
    });
    // get info from cart
    app.get('/carts', async(req, res)=>{
      const email = req.query.email;
      const query = {email: email}
      const result = await cartCollection.find(query).toArray()
      res.send(result)
    })
    // delete item
    app.delete('/carts/:id', async(req, res)=>{
      const id = req.params.id
      console.log(id)
      const query = {_id: new ObjectId(id)}
      const result = await cartCollection.deleteOne(query)
      res.send(result)
    })
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})