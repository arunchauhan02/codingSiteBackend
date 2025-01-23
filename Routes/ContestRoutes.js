const express = require("express");
const router = express.Router();
const { authentication, authorization } = require("../util/auth");
const { createContest, getContest, deleteContest, updateContest, getAllContest } = require("../Controller/ContestController");

router.route("/createcontest").post(authentication,authorization("admin"),createContest);

router.route("/contest/:id").get(getContest).delete(authentication,authorization("admin"),deleteContest)
.put(authentication,authorization("admin"),updateContest);

router.route("/getallcontest").get(getAllContest);
module.exports = router