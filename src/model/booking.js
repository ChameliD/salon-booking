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
    bookingDate:{
        type:Date,
        //format:'YYYY-MM-DD',
        required:true,
    },
    bookingTime:{
        type:String,
        required:true,
    }
}))

module.exports = booking;