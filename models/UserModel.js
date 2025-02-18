const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        require : "Name is Required",
    },
    email : {
        type : String,
        require : "Email is Required",
        unique : true,
    },
    password : {
        type : String,
        require : "Password is Required",
    },
},{
    timestamp : true,
});

const userModel = mongoose.model("User", userSchema)

module.exports = userModel