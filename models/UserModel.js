const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : "Name is Required",
    },
    email : {
        type : String,
        required : "Email is Required",
    },
    password : {
        type : String,
        required : "Password is Required",
    },
},{
    timestamp : true,
});

const userModel = mongoose.model("User", userSchema)

module.exports = userModel