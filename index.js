const express = require('express');
const mongoose = require('mongoose')
const Product = require('./models/product.model.js');
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from Node API on server updated");
});
app.get('/api/products', async (req, res) => {
    try {
        
        const product = await Product.find({})
        
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })
        
    }
});

app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

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