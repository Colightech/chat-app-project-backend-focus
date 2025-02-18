const mongoose = require("mongoose")


const chatRoomSchema = new mongoose.Schema({
    name : {
        type : String,
        required : "Name is Required"
    },
},{
    timestamp : true,
});

const chatRoomModel = mongoose.model("ChatRoom", chatRoomSchema)

module.exports = chatRoomModel