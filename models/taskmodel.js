const mongoose=require("mongoose")
const Todo=new mongoose.Schema({
    name:{
        type:String,
      require:true
    },
    task:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("Todotasks",Todo)