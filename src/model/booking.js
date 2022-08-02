const mongoose=require("mongoose")
const booking=mongoose.model("bookingList",new mongoose.Schema({
    
    service:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    time:{
        type:Time,
        required:true,
    }
}))

module.exports = booking;