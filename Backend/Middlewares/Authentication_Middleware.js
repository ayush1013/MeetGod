const jwt = require("jsonwebtoken");
require("dotenv").config();

const AuthenticationMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        const decodedPassword = jwt.verify(token, process.env.key)
        console.log(decodedPassword);
        if(decodedPassword){
            const userID = decodedPassword.userID;
            req.body.userID = userID;
            next();
        }else{
            res.send({message: "Please Login First"})
        }
    }else{
        res.send({message: "Please Login First"})
    }
}

module.exports = AuthenticationMiddleware