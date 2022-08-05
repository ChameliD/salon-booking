const booking=require("../model/booking")
module.exports.create=async function(req,res){
    const{service,firstName,lastName,email,bookingDate,bookingTime}=req.body;
    try{
        const resp=await booking.create({
            service:service,
            firstName:firstName,
            lastName:lastName,
            email:email,
            bookingDate:bookingDate,
            bookingTime:bookingTime,
    
        })
    
        res.send({
            success:true,
            data:resp,
        })
    }catch(e){
        console.log("Error: ",e)
    }
   
}

module.exports.get=async function(req,res){
    const{id}=req.params;
    try{
        console.log("variable__",id)
        const resp=await booking.findById(id);

        res.send({
            success:true,
            data:resp
        });
    }catch(e){
        console.log("Error: ",e)
    }
    
}