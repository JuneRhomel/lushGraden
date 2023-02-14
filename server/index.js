const express = require("express");
const app = express()
const cors = require("cors");
const mongoose = require('mongoose');
const User = require('./models/user.models')

// middleware
app.use(cors())
app.use(express.json())

mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false)
// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://0.0.0.0:27017/', {
    useNewUrlParser: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});



app.post("/api/register", async (req,res) => {
    
    try {
        const user = await User.create({
            name: req.body.username,
            name: req.body.email,
            name: req.body.password,
        })
        res.json({status: "ok"})
    } catch (err){
        res.json({status: "error"})
    }
    console.log(req.body)
})

app.post("/api/login", async (req,res) => {
    
    try {
        const user = await User.create({
            name: req.body.username,
            name: req.body.email,
            name: req.body.password,
        })
        res.json({status: "ok"})
    } catch (err){
        res.json({status: "error"})
    }
    console.log(req.body)
})


app.listen(3000, () => {
    console.log("server")
})