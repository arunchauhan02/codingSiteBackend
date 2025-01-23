const mongoose = require("mongoose");

const connectDatabase = async()=>{
    console.log(`Connected to backend successfully ${process.env.DATABASE_URL}`)
    mongoose.connect(process.env.DATABASE_URL);
}

module.exports = {connectDatabase}
