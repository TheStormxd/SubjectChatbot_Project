const mongoose = require("mongoose")
const chatSchema = new mongoose.Schema(
    { 
        userId:String,
        chatContent:[
            {
                chatUser:String,
                chatMachine:String
            }
        ],
        deleted: {
            type:Boolean,
            default:false
        },
        deletedAt:Date,    
    }
 );

const Chat = mongoose.model('Chat', chatSchema,"chats");

module.exports = Chat