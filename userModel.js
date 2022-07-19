const mongoose = require("mongoose");
const UserSchema = require("./userSehema")
module.exports=mongoose.model('userDb',UserSchema);
