const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
var User = new mongoose.Schema(
    {
    uername:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
}, 
    { collation: "user-data"}
);

//Export the model
module.exports = mongoose.model('User', User);
