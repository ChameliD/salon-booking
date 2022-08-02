const mongoose=require("mongoose")

const salonService=mongoose.model("serviceList",new mongoose.Schema({
    
    serviceName:{
        type:String,
        required:true,
    },
    servicePrice:{
        type:Number,
        required:true,

    }
}))

module.exports = salonService;