const axios =require( "./axiosCustome")

module.exports.getResponse = async(data)=>{
    try {
        const URL_LOGIN ='/api/chat'
        // console.log(params);
        const response = await axios.post(URL_LOGIN,data,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        return response
    } catch (error) {
        return {
            code:400,
            message:"Error in axios!"
        }
    }
}

// module.exports.getResponse= instance;

