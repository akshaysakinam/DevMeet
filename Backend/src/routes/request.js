const express = require("express");
const { userAuth } = require("../middlewares/auth.js");
const ConnectionRequest = require("../models/connectionRequest.js");
const User = require("../models/user.js");
const requestRouter = express.Router();

//send interested req from logged in user to another user
//status is dynamic its for interested(when right swipe like tinder) and ignored(left swipe like tinder)
requestRouter.post(
  "/request/send/:status/:toUserId",
  userAuth,
  async (req, res) => {
    try {
      const fromUserId = req.user._id;
      const toUserId = req.params.toUserId;
      const status = req.params.status;

      //connection req should be either interested or ignored
      const allowedStatus = ["interested", "ignored"];
      if (!allowedStatus.includes(status)) {
        return res.status(400).json({
          message: "Invalid status type " + status,
        });
      }



      //toUserId must be in db because connection req is sent to user in db not to random
      const toUser = await User.findById(toUserId);
      if (!toUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      //checking existingConnectionRequest
      //req should not be multiple so check duplicate of req sent from sender to receive as well as
      //receiver to sender
      const existingConnectionRequest = await ConnectionRequest.findOne({
        $or: [
          {
            fromUserId,
            toUserId,
          },
          {
            fromUserId: toUserId,
            toUserId: fromUserId,
          },
        ],
      });
      if (existingConnectionRequest) {
        return res.status(400).json({
          message: "Connection Request Already Exists",
        });
      }

      const connectionRequest = new ConnectionRequest({
        fromUserId,
        toUserId,
        status,
      });

      const data = await connectionRequest.save();
      res.json({
        message: req.user.firstName+(status==="interested"?"is interested in":" has ignored")+toUser.firstName,
        data,
      });
    } catch (err) {
      res.status(400).send("Error: " + err.message);
    }
  }
);

requestRouter.post('/request/review/:status/:requestId',userAuth,async (req,res)=>{
  try{
    const loggedInUser=req.user;
    const{status,requestId}=req.params;

    //validate status
    const allowedStatus=["accepted","rejected"]
    if(!allowedStatus.includes(status)){
      return res.status(400).json({
        message:"Status not allowed"
      })
    }

    //loggedin user should be toUserId
    //status must be interested
    //requestId should be valid
    const connectionRequest=await ConnectionRequest.findOne({
      _id:requestId,
      toUserId:loggedInUser._id,
      status:"interested"
    })
    if(!connectionRequest){
      return res.status(404).json({
        message:"Connection request not found"
      })
    }

    connectionRequest.status=status; //interested changes to either accepted or rejected.

    const data=await connectionRequest.save();

    res.json({
      message:"Connection request "+status,data
    })

  }catch(err){
    res.status(400).send("ERROR: "+err.message);
  }
})

module.exports = requestRouter;
