
const mongoose=require('mongoose')

const paymentSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    paymentId:{ //it is optional because some payments may fail 
        type:String
    },
    orderId:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true,
    },
    currency:{
        type:String,
        required:true,
    },
    receipt:{
        type:String,
        required:true,
    },
    notes:{
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        membershipType:{
            type:String
        }
    }

},{
    timeseries:true
})

const Payment=mongoose.model('Payment',paymentSchema)
module.exports=Payment