const express = require("express");
const { userAuth } = require("../middlewares/auth");
const userRouter = express.Router();
const ConnectionRequest = require("../models/connectionRequest.js");
const User = require("../models/user.js");

const USER_SAFE_DATA = "firstName lastName age gender photoUrl about skills";
//Get all the pending connection request for the loggedIn user
userRouter.get("/user/requests/received", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequests = await ConnectionRequest.find({
      toUserId: loggedInUser._id,
      status: "interested",
    }).populate("fromUserId", USER_SAFE_DATA);
    //or
    // }).populate("fromUserId",["firstName" ,"lastName" ,"age" ,"gender", "photoUrl", "about" ,"skills"])

    res.json({
      message: "Data Fetched Successfully",
      data: connectionRequests,
    });
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

//get all the connections list
userRouter.get("/user/connections", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;

    const connectionRequests = await ConnectionRequest.find({
      $or: [
        { fromUserId: loggedInUser._id, status: "accepted" },
        { toUserId: loggedInUser._id, status: "accepted" },
      ],
    })
      .populate("fromUserId", USER_SAFE_DATA)
      .populate("toUserId", USER_SAFE_DATA);

    const data = connectionRequests.map((row) => {
      if (row.fromUserId._id.toString() === loggedInUser._id.toString()) {
        return row.toUserId;
      }
      return row.fromUserId;
    });

    res.json({
      data,
    });
  } catch (err) {
    res.status(400).send("ERROR: " + err);
  }
});

userRouter.get("/feed", userAuth, async (req, res) => {
  try {
    //User should see all the user cards except
    //0.his own card
    //1.his connections
    //2.ignored people
    // 3. already sent connection request
    //It means if there is a entry of akshay and rahul in the connectionreq so they should not see profile of each other on their feed

    const loggedInUser = req.user;
    const page=parseInt(req.query.page)||1;
    let limit=parseInt(req.query.limit)
    limit=limit>30?30:limit;
    const skip=(page-1)*limit;

    //find all connection reqs thats either i have sent or received
    const connectionRequests = await ConnectionRequest.find({
      $or: [
        {
          fromUserId: loggedInUser._id,
        },
        {
          toUserId: loggedInUser._id,
        },
      ],
    }).select("fromUserId toUserId");
    //The above connectionrequests will find all the reqs from conenctionreq schema with fromUserId and
    //toUserId. For each req we will get both from and to it means users ids can be repeated in
    //multiple requests so for that we add the reqs in a set such that there will be no multiple ids
    //which means we get unique userids. Thats the aim to find here because if we ignore those ids
    //while giving feed then user cannot see people which are above mentioned (0,1,2,3)

    const hiddenUsersFromFeed = new Set();
    connectionRequests.forEach((req) => {
      hiddenUsersFromFeed.add(req.fromUserId.toString());
      hiddenUsersFromFeed.add(req.toUserId.toString());
    });
    //hidden users are those users we should not show in feed

    //find users other than hidden
    const users = await User.find({
      $and: [
        { _id: { $nin: Array.from(hiddenUsersFromFeed) } }, //convert set to array and find id not in that array
        { _id: { $ne: loggedInUser._id } }, // id not equals to self id
      ],
    }).select(USER_SAFE_DATA).skip(skip).limit(limit);
    res.json({data: users})
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

module.exports = userRouter;
