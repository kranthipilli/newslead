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
   module.exports=validateUser