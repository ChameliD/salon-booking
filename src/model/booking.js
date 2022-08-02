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
    /*bookingDate:{
        type:Date,
        required:true,
    },
    bookingTime:{
        type:Time,
        required:true,
    }*/
}))

module.exports = booking;