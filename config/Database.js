const mongoose = require("mongoose");

const connectDatabase = async()=>{
    mongoose.connect(process.env.DATABASE_URL);
}

module.exports = {connectDatabase}
