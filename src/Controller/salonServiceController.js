const salonService=require("../model/salonService")

module.exports.create=async function(req,res){
    const{serviceName,servicePrice}=req.body;
    try{
        const resp=await salonService.create({
            serviceName:serviceName,
            servicePrice:servicePrice,
               
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
        const resp=await salonService.findById(id);

        res.send({
            success:true,
            data:resp
        });
    }catch(e){
        console.log("Error: ",e)
    }
    
}