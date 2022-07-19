const mongoose = require("mongoose");
async function connect() {
    mongoose.connect("mongodb+srv://admin:Rtrpuho6bp81T7HP@cluster0.zxngk.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
    
  ).then(()=>{
    console.log('connected')
  })
  .catch('not connected to Db')
}
module.exports.connect = connect