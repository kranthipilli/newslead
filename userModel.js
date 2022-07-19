const mongoose = require("mongoose");
const UserSchema = require("../blog-web_app/userSehema")
module.exports=mongoose.model('userDb',UserSchema);
