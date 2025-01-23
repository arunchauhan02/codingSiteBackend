const User = require("../Models/User");
const sendtoken = require("../util/token");

exports.createUser = async(req,res)=>{
    console.log(req.body)

    try {
        
        const user = await User.create(req.body);
    
        res.status(200).json({
            user,
            message:"Registered Successfully"
        })
    } catch (error) {
        console.log(error)
    }
}

exports.login = async(req,res)=>{
    // console.log(req.body)
    const {email,password} = req.body;

    let user = await User.findOne({email:email}).select("+password");

    if(!user){

    }

    const isPasswordMatched = await user.comaparePassword(password);

    if(!isPasswordMatched){

    }

    sendtoken(req,user,200,res);

}