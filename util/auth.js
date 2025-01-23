const jwt = require("jsonwebtoken");
const User = require("../Models/User");

exports.authentication = async(req,res,next)=>{
    
    let {token} = req.cookies;

    let decodedData = jwt.verify(token,process.env.JWT_SECRET);

    let user = await User.findById(decodedData.id);
    
    req.user = user;


    next();
}


exports.authorization =  (...roles)=>{
    
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            //return next(new ErrorHandler(`Role: ${req.user.role} is not allwoed to access this resource`,403));
        }
        next();
    };
}