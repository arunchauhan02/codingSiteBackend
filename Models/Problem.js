const mongoose = require("mongoose");


const problemsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter a valid name"]
    },
    description:{
        type:String
    },
    code:{
        type:String,
        // select:false
    },
    price:{
        type:Number,
        required:[true,"Please Enter Price"],
    },
})

module.exports = mongoose.model("Problem",problemsSchema);