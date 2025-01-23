const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");

const { connectDatabase } = require("./config/Database");
const userRoutes = require("./Routes/UserRoutes");
const contestRoute = require("./Routes/ContestRoutes");
const problemRoute = require("./Routes/ProblemRoute")

require("dotenv").config()

app.use(express.json());
app.use(cookieparser())


connectDatabase();
app.use("/api/v1",userRoutes);
app.use("/api/v1",contestRoute);
app.use("/api/v1",problemRoute);

app.get("/",(req,res)=>{
    console.log(req);
    res.send({
        message:"op"
    })
})

app.get("/api/v1",(req,res)=>{
    console.log(req);
    res.send({
        message:"opoooo"
    })
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is Working at ${process.env.PORT}`);
})
