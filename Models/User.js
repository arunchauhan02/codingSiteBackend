const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter a valid name"]
    },email:{
        type:String,
        required:[true,"Please Enter a valid email"]

    },password:{

        type:String,
        required:[true,"Please enter your password"],
        minlength:[8,"password should have atleast 8 characters"],
        select:false

    },createdAt:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        default:"user"
    }, 
    resetPasswordToken:String,
    resetPasswordExpire:Date,
})


userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcryptjs.hash(this.password,10);
})

userSchema.methods.getJwtToken = function(){
    
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    });
}



userSchema.methods.comaparePassword = async function (enteredpassword){
    return await bcryptjs.compare(enteredpassword,this.password)
}

module.exports = mongoose.model("User",userSchema);