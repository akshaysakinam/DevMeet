const mongoose=require('mongoose')
const validator=require('validator')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:4,
        maxLength:25,
    },
    lastName:{
        type:String,
    },
    emailId:{
        type:String,
        lowercase:true, //change to small case if Capital used
        required:true,
        unique:true,
        trim:true, //to avoid spaces in email
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address")
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error("Enter Strong Password")
            }
        }
    },
    age:{
        type:Number,
        min:18  // above 18 should be allowed
    },
    gender:{
        type:String,
        validate(value){  
            if(!["male","female","others"].includes(value)){    
                throw new Error("Gender is not valid")
            }
        }
        //validate function will run only for new documents incase if you dont use runvalidators explicitly in patch api. When we update or doing patch It wont work. So mention runvalidators
    },
    isPremium:{
        type:Boolean,
        default:false
    },
    membershipType:{
        type:String,

    },
    photoUrl:{
        type:String,
        default:"https://img.favpng.com/17/24/10/computer-icons-user-profile-male-avatar-png-favpng-jhVtWQQbMdbcNCahLZztCF5wk.jpg",
        validate(value){
            if(!validator.isURL(value)){
                throw new Error("Invalid Photo URLL "+value)
            }
        }
    },
    about:{
        type:String,

    },
    skills:{
        type:[String]
    }
},{
    timestamps:true
})

userSchema.index({firstName:1,lastName:1})


userSchema.methods.getJWT=async function(){
    const user=this;
    const token=await jwt.sign({ _id: user._id }, process.env.JWT_SECRET,{expiresIn:"1d"});
    return token
}

userSchema.methods.validatePassword= async function(passwordInputByUser){
    const user=this;
    const hashPassword=user.password

    const isPasswordValid=await bcrypt.compare(passwordInputByUser,hashPassword);
    return isPasswordValid;
}


const User=mongoose.model("User",userSchema);


module.exports=User;