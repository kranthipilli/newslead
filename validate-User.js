const Joi = require('joi')
const userSehema =require("./userSehema")
const config = require("config")
var jwt = require('jsonwebtoken');


function generateAuthToken(userSehema){
    const token =jwt.sign({_id:userSehema._id,isAdmin:this.isAdmin},config.get('jwtPrivateKey'))
    return token
  }

function validateUser(userSehema){
    const schema = {
     username:Joi.string().min(5).max(50).required(),
     email:Joi.string().min(5).max(255).required(),
     password:Joi.string().min(5).max(1024).required(),
     contact:Joi.number().min(5).max(255).required(),
     DOB:Joi.string().min(5).max(50).required()
    }
   return Joi.validate(userSehema,schema)
   
     
   }
   module.exports=generateAuthToken