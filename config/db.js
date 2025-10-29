const mongoose=require("mongoose")
const url=process.env.url
const connectdb=async()=>{
try{
    await mongoose.connect(url)
    console.log("connected to db")
}
catch(error){
    console.log(error)
}
}
module.exports=connectdb