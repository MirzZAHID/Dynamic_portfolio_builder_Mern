var jwt = require('jsonwebtoken');
require("dotenv").config();
const JWT_Secret = "Hello World"
const fetch = (req,res,next) =>{

    const token = req.header('token')
    if(!token){
        return res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try {
        
        const string = jwt.verify(token,JWT_Secret)
        req.user = string.user
        // return res.status(200).send({success:true,message:string.user})

    } catch (error) {
        return res.status(401).send({success:false,error:"Please authenticate using a valid token"})
    }
    next()
}
module.exports = fetch;