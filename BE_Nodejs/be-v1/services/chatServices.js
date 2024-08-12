const Chat = require("../models/chat.model")
const axios = require("../utils/axios")
module.exports.createChat =async ()=>{
    try{
        const result =await Chat.create({  
            deleted:false
        });
        return result
        

    }catch(e){
        console.log(e);
        return null
    }
}
module.exports.getChatById =async (id)=>{
    try{
        
        let result = await Chat.findOne({_id:id,deleted:false});
        return result;
    }catch(e){
        console.log("error find chat");
        return null
    }
}

module.exports.addMessage =async (chatUser,id)=>{
    try{
        const response = await axios.post('http://localhost:5000/api/chat', { message: chatUser });
        
        let result = await Chat.updateOne({_id:id},{
            $push:{
                chatUser:chatUser,
                chatMachine: response.response
            }
        })
        return response.response;
    }catch(e){
        console.log("error add chat");
        return null
    }
}

module.exports.deleteMessage =async (id)=>{
    try{
        let result = await Chat.updateOne({_id:id},{deleted:true})
        return result;
    }catch(e){
        console.log("error del chat");
        return null
    }
}

module.exports.getAllChat =async ()=>{
    try{
        let result = await Chat.find({deleted:false});
        return result;
    }catch(e){
        console.log("error find all chat");
        return null
    }
}