const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send("Hello from Node API on server updated");
});



mongoose.connect("mongodb+srv://samuelteshale4336:6LPWa4Npjne1HoHb@cluster0.vekwtus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to database!")
        app.listen('3000', () => {
    console.log("Server running on port 3000");
})

    })
    .catch(() => {
    console.log("Connection failed!")
})