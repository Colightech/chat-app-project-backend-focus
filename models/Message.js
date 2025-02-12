const mongoose = require("mongoose")


const messageSchema = mongoose.Schema({
    chatroom : {
        type : mongoose.Schema.ObjectId,
        required : "Chatroom is Required",
        ref : "ChatRoom"
    },
    user : {
        type : mongoose.Schema.ObjectId,
        required : "User is Required",
        ref : "User"
    },
    message : {
        type : mongoose.Schema.ObjectId,
        required : "Message is Required",
        ref : "Message"
    },
},{
    timestamp : true,
});

const messageModel = mongoose.model("Message", messageSchema)

module.exports = messageModel