const mongoose = require(mongoose)

try{
    const conn=mongoose.connect("mongodb+srv://test:test@test.zsxfjqn.mongodb.net/?retryWrites=true&w=majority")
    console.log(`-mongodb connection stablished: ${conn.connection.host}`)

}catch(e){
    console.log(`mongoDB error: ${e}`)
}
module.exports=conn;