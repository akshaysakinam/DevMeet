const express = require("express");
const { userAuth } = require("../middlewares/auth");
const Payment = require("../models/payment");
const paymentRouter = express.Router();
const instance = require("../utils/razorpay");
const { membershipAmount } = require("../utils/constants");
const {
  validateWebhookSignature,
} = require("razorpay/dist/utils/razorpay-utils");
const User = require("../models/user");

paymentRouter.post("/payment/create", userAuth, async (req, res) => {
  try {
    const { membershipType } = req.body;
    const { firstName, lastName, emailId } = req.user;
    const order = await instance.orders.create({
      amount: membershipAmount[membershipType] * 100, //in paisa
      currency: "INR",
      receipt: "receipt#1",
      notes: {
        firstName,
        lastName,
        emailId,
        membershipType: membershipType,
      },
    });

    //save it in my database
    const payment = new Payment({
      userId: req.user._id,
      orderId: order.id,
      status: order.status,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      notes: order.notes,
    });

    const savedPayment = await payment.save();

    //return back order details to frontend
    console.log(order);
    res.json({ ...savedPayment.toJSON(), keyId: process.env.RAZORPAY_KEY_ID });
  } catch (error) {
    console.log(error.error);

    res.status(400).json({ message: error.message });
  }
});

paymentRouter.post("/payment/webhook", async (req, res) => {
  try {
    const webhookSignature=req.get("X-Razorpay-Signature")
    const isWebhookValid=validateWebhookSignature(
      JSON.stringify(req.body),
      webhookSignature,
      process.env.RAZORPAY_WEBHOOK_SECRET
    );

    if(!isWebhookValid){
      return res.status(400).json({msg:"Webhook signature is not valid"})
    }

    //update my payment status in db

    const paymentDetails=req.body.payload.payment.entity
    const payment=await Payment.findOne({orderId:paymentDetails.order_id})
    payment.status=paymentDetails.status

    await payment.save()

    //update the user in db as premium

    const user=await User.findOne({_id:payment.userId})
    user.isPremium=true;
    user.membershipType=payment.notes.membershipType;
    await user.save()
    

    // if(req.body.event==="payment.captured"){

    // }
    // if(req.body.event==="payment.failed"){}

    //return success response to razorpay
    return res.status(200).json({msg:"Webhook received successfully"})

  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
});


paymentRouter.get("/premium/verify",userAuth,async(req,res)=>{
  try {
    const user = req.user.toJSON();
    if(user.isPremium){
      return res.json({...user})
    }
    return res.json({...user})
    
  } catch (error) {
    return res.json(500).json({msg:error.message})
  }
})

module.exports = paymentRouter;
