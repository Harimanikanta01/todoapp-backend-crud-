const express=require("express")
const taskmodel=require("../models/taskmodel")

const routes=express.Router()

routes.get("/get",async(req,res)=>{
   const gettasks=await taskmodel.find()
   try{
res.status(200).json(gettasks)
   }
   catch(error){
    console.log(error)
   }

   
})
routes.post("/post",(req,res)=>{
    const {name,task}=req.body
    const posttasks=new taskmodel({name,task})
    try{
        posttasks.save()
        res.status(200).send("sended to db")
        console.log({name,task})
    }
    catch(error){
        res.status(400).send(error)
    }
})   
routes.put("/update/:id",async(req,res)=>{
    const {id}=req.params
    const {name,task}=req.body
    const taskupdate=await taskmodel.findByIdAndUpdate(id,{name,task})
    try{
       
        res.send("updated successfully")
        console.log({name,task})
    }
    catch(error){
        console.log(error)
        res.send(error)
    }
})
routes.delete("/delete/:id",async(req,res)=>{
const {id}=req.params
if(id){
const deletetask=await taskmodel.findByIdAndDelete(id)
res.send("deleted record")
}
else{
    res.send("invalid error")
}
})
module.exports=routes