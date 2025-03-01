const validator=require('validator')

const SignUpDataValidation=(req)=>{
    const{firstName,lastName,emailId,password}=req.body;
    if(!firstName || !lastName){
        throw new Error("Please fill FirstName and LastName")

    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid")
    }else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter a Strong password")
    }
}

const ValidateEditProfileData=(req)=>{
    const allowedEditFields=["firstName","lastName","photoUrl","gender","about","skills"]
    const isEditAllowed=Object.keys(req).every(field=>allowedEditFields.includes(field));
    return isEditAllowed

}


module.exports={
    SignUpDataValidation,
    ValidateEditProfileData
}