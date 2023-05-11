const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
    address:{
        type:String
    },
    state:{
        type:String
    },
    postal_code:{
        type:Number
    },
    country:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    category:{
            type:String,
            default:"User"
    },
    gender:{
            type:String,            
    }
})

const UserModel = mongoose.model("Users", UserSchema);

module.exports = UserModel