const mongoose = require("mongoose");

const connectionRequestSchema = new mongoose.Schema(
  {
    fromUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    toUserId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["ignored", "interested", "accepted", "rejected"],
        message: `{VALUE} is incorrect status type`,
      },
    },
  },
  {
    timestamps: true,
  }
);

connectionRequestSchema.index({fromUserId:1,toUserId:1})

connectionRequestSchema.pre("save", function (next) {
  const connectionRequest = this;

  //console.log("Connection Request Object:", connectionRequest); // Print the full document
  /*Eg :
    Connection Request Object: {
        _id: new ObjectId("65fabcde1234567890abcdef"),
        fromUserId: new ObjectId("65123abcde7890f123456789"),
        toUserId: new ObjectId("65123abcde7890f123456780"),
        status: "pending",
        createdAt: 2025-02-26T10:00:00.000Z,
        __v: 0
} */

  //check if connection fromUserId is same as toUserId
  if (connectionRequest.fromUserId.equals(connectionRequest.toUserId)) {
    throw new Error("Cannot Send connection request to yourself");
  }
  next();
});

//ConnectionRequestModel
const ConnectionRequest = new mongoose.model(
  "ConnectionRequest",
  connectionRequestSchema
);

module.exports = ConnectionRequest;
