const express = require('express');
const mongoose = require('mongoose');
// imports from other files
const authRouter =require('./routes/auth');
const adminRouter =require('./routes/admin');
const productRouter = require('./routes/product');
// init
const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.unsubscribe(productRouter);
const DB ='mongodb+srv://rohayem:p5QgBJwAKXfGX5kH@amazonclusster.gluc8zz.mongodb.net/amazonApp?retryWrites=true&w=majority';
// Connections
mongoose.connect(DB).then(()=>{
    console.log('Connection successful');
});
app.listen(PORT,"0.0.0.0",()=>{
    console.log('server starting!');
});