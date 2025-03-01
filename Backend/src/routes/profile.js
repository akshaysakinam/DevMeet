const express=require('express');
const profileRouter=express.Router();
const { userAuth } = require("../middlewares/auth.js");
const { ValidateEditProfileData } = require('../utils/validation.js');

profileRouter.get("/profile/view", userAuth, async (req, res) => {
    try {
      const user = req.user;
      res.send(user);
    } catch (err) {
      res.status(400).send("ERROR: " + err.message);
    }
  });


profileRouter.patch("/profile/edit",userAuth, async(req,res)=>{
  try{
    if(!ValidateEditProfileData){
      throw new Error("Invalid Edit Request")
    }
    const loggedInUser=req.user;
    Object.keys(req.body).forEach(key=>loggedInUser[key]=req.body[key])

    await loggedInUser.save();
    res.json({
      message:"User Updated Successfully",
      loggedInUser
    })
  }catch(err){
    res.status(400).send("ERROR:"+err.message);
  }
})
module.exports=profileRouter;