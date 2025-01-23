const Problem = require("../Models/Problem")


exports.deleteProblem = async (req,res)=>{
    let id = req.params.id;
    let problem = await Problem.findByIdAndDelete(id);

    return res.status(200).json({
        problem,
        message:"Problem Deleted SuccessFully"
    });
}

exports.updateProblem = async(req,res)=>{
    let id = req.params.id;
    let updatedProblem = {...req.body};
    let problem = await Problem.findByIdAndUpdate(id,updatedProblem,{new:true});

    return res.status(200).json({
        problem
    });
}

exports.getProblem = async(req,res)=>{
    let id = req.params.id;
    let problem = await Problem.findById(id);

    return res.status(200).json({
        problem
    });
}

