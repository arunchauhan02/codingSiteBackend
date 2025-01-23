const Contest = require("../Models/Contest");
const Problem = require("../Models/Problem");


exports.createContest = async(req,res)=>{
    
    const newContest = {
                        name:req.body.name,
                        user:req.user._id,
                        price:0
                        }
    let contest = await Contest.create(newContest);

    return res.status(200).json({
        contest:contest,
        message:"Contest Created Successully"
    })
}


exports.getContest = async (req,res)=>{
    let id = req.params.id;
    
    let contest = await Contest.findById(id).populate('user').populate({
        path:"problems",transform:(doc)=>{
            if(doc && doc.price == 0){
                return {
                    ...doc.toObject(),
                    code:doc.code
                }
            }
            else if(doc){
                return {
                    ...doc.toObject(),
                    code:undefined
                }
            }
            return doc;
        }

    });

    // console.log(contest);
    if(!contest){

    }

    return res.status(200).json({
        contest
    })
}

exports.deleteContest = async (req,res)=>{
    let id = req.params.id;
    
    let contest = await Contest.findByIdAndDelete(id);

    if(!contest){

    }

    return res.status(200).json({
        message:"Contest Deleted Successfully"
    })
}


exports.updateContest = async (req,res)=>{
    let id = req.params.id;
    let {name,problems,price,code} = req.body;
    let contest = await Contest.findById(id);

    let newProblems = [...contest.problems];

    for(let i = 0;i<problems.length;i++){
        let p1 = await Problem.create(problems[i]);
        console.log(p1);
        newProblems.push(p1._id);
    }
    let newContest = await Contest.findByIdAndUpdate(id,{name,problems:newProblems,price,user:req.user.id,code},{new:true});

    return res.status(200).json({
        newContest
    })

}

exports.getAllContest = async (req,res)=>{
    let freeContest = await Contest.find({price:0});
    let paidContest = await Contest.find({price:{$gt:0}});

    return res.status(200).json({
        freeContest,
        paidContest
    })
}