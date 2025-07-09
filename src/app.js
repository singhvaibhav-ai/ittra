const express = require('express');
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req,res) =>{
    res.send({message:"This is a perfume selling web app know as ittra!!"})
})

app.use('/api/user', userRoutes);

module.exports = app;