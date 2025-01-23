const express = require("express");
const { createUser, login } = require("../Controller/UserController");
const router = express.Router();

router.route("/register").post(createUser);
router.route("/login").post(login);

module.exports = router


