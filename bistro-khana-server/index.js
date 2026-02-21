const express = require('express');
const app = express();
const cors = require('cors')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

// middle ware
app.use(cors());
app.use(express.json())

// verify token middleware
const verifyToken = (req, res, next)=>{
  if(!req.headers.authorization){
    return res.status(401).send({message: 'Forbidden Access'});
  }
  const token = req.headers.authorization.split(' ')[1]
  if(!token){
    return res.status(401).send({message: 'Forbidden Access'});
  }
  // verify token
  jwt.verify(token, process.env.ACCES_TOKEN, (err, decoded)=>{
    if(err){
      return res.status(401).send({message: 'Forbidden Access'});
    }
    req.decoded = decoded;
    next();
  })
}


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

// verify admin middleware
const verifyAdmin = async(req, res, next)=>{
  const email = req.decoded.email;
  const query = {email: email}
  const user = await userCollection.findOne(query);
  const isAdmin = user?.role === 'admin';
  if(!isAdmin){
    return res.status(403).send({message: 'Forbidden Access'});
  }
  next();
}

    // jwt token generate and send to client side local storage
    app.post('/jwt', async(req, res)=>{
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCES_TOKEN, {
        expiresIn: '1h'
      });
      res.send({token})
    })
// users api
    app.post('/users',  async(req, res)=>{
      const user = req.body;
      // check if user exists
      const query = {email: user.email}
      const existinguser = await userCollection.findOne(query);
      if(existinguser){
        return({message: "User already Existed", insertedId: null})
      }
      const result = await userCollection.insertOne(user);
      res.send(result)
    });
    app.get('/users', verifyToken, async(req, res)=>{
      const users = await userCollection.find({}).toArray();
      res.send(users)
    });
    app.get('/users/:email', async(req, res)=>{
      const email = req.params.email;
      const query = {email: email}
      const user = await userCollection.findOne(query);

      let admin=false;
      if(user?.role){
        admin = true;
      }
      
      res.send({admin})
    });
    app.delete('/users/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await userCollection.deleteOne(query);
      res.send(result);
    });
    app.patch('/users/admin/:id', verifyToken, async(req, res)=>{
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
    app.get('/users/admin/:email', verifyToken, verifyAdmin, async(req, res)=>{
      const email= req.params.email;
      // check if the user trying to access own email or not
      if(email !== req.decoded.email){
        return res.status(403).send({message: 'Unauthorized access'})
      }
      const query ={email: email}
      const existinguser = await userCollection.findOne(query)
      let admin = false;
      
      if(existinguser){
        admin = existinguser.role === 'admin'

      }
      res.send({admin})
      
    });


    // Menu api
    app.get('/menu', async(req, res)=>{
        const result = await menuCollection.find({}).toArray();
        res.send(result)
    });
    app.get('/menu/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await menuCollection.findOne(query);
      res.send(result)
    });
    app.post('/menu', verifyToken, verifyAdmin, async(req, res)=>{
      const item = req.body;
      const result = await menuCollection.insertOne(item);
      res.send(result)
    });
    app.delete('/menu/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await menuCollection.deleteOne(query);
      res.send(result);
    });
    app.patch('/menu/:id', async(req, res)=>{
      const id = req.params.id;
      const updateItem = req.body;
      const query ={_id: new ObjectId(id)};
      const updateDoc ={
        $set: {
          name: updateItem.name,
          image: updateItem.image,
          recipe: updateItem.recipe,
          category: updateItem.category,
          price: updateItem.price
        }
      }
      const result = await menuCollection.updateOne(query, updateDoc);
      res.send(result);
    })
    
    app.get('/reviews', async(req, res)=>{
        const result = await reviewsCollection.find({}).toArray();
        res.send(result)
    });
    app.get('/reviews/:id', async(req, res)=>{
      const id = req.params.id
      const query = {_id: id}
      const result = await reviewsCollection.findOne(query);
      console.log(result)
      res.send(result)
    });
    // add to cart
    app.post('/carts', verifyToken, async(req, res)=>{
      const query = req.body.cart;
      
      const result = await cartCollection.insertOne(query);
      res.send(result)
    });
    // get info from cart
    app.get('/carts', verifyToken, async(req, res)=>{
      const email = req.query.email;
      const query = {email: email}
      const result = await cartCollection.find(query).toArray()
      res.send(result)
    })
    // delete item
    app.delete('/carts/:id', async(req, res)=>{
      const id = req.params.id
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