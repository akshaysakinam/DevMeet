const express=require("express");

const app=express();
app.use("/test",(req,res)=>{
    res.send("Hello from server")
})

app.use("/hello",(req,res)=>{
    res.send("Hello from hello");
})

app.use("/",(req,res)=>{
    res.send("Hello From dashboard");
    
})



app.listen(5000,()=>{
    console.log("Server is listening on port:5000")
})
