const express=require("express");

const app=express();

app.get("/user",(req,res)=>{
    res.send({
        firstname:"Akshay Kumar",
        lastname:"Sakinam"
    })
})
app.post("/user",(req,res)=>{
    //logic for post
    res.send("Post successful")
})
app.delete("/user",(req,res)=>{
    //logic for delete
    res.send("delete successful")
})
app.put("/user",(req,res)=>{
    //logic for put
    res.send("Put successful")
})


app.listen(5000,()=>{
    console.log("Server is listening on port:5000")
})
