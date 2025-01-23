const express = require("express");
const { deleteProblem, updateProblem, getProblem } = require("../Controller/ProblemController");
const router = express.Router();

router.route("/problem/:id").delete(deleteProblem).put(updateProblem).get(getProblem);

module.exports = router;