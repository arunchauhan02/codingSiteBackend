const mongoose = require("mongoose");

const contestSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter a valid name"]
    },
    problems:[{
            type:mongoose.Schema.ObjectId,
            ref:"Problem"
        }
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Contest",contestSchema);