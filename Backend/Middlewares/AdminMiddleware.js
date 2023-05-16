const userModel = require("../Models/UsersModel");

const AdminMiddleware = async(req,res,next)=>{
    const userID = req.body.userID;
    const isAdmin = await userModel.findOne({_id: userID});

    if(isAdmin?.category == "Admin") {
        next();
    }else{
        res.send({message: "You are not allowed as an admin"})
    };
}

module.exports = AdminMiddleware;

