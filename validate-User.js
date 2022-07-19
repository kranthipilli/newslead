const Joi = require('joi')
const userSehema =require("./userSehema")
const config = require("config")
var jwt = require('jsonwebtoken');


function generateAuthToken(userSehema){
    const token =jwt.sign({_id:userSehema._id,isAdmin:this.isAdmin},config.get('jwtPrivateKey'))
    return token
  }


   module.exports=generateAuthToken