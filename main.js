const config = require("config")
const express = require("express");
const app = express();
port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');
const db = require("./db");
const router = require("./routes");

if(!config.get('jwtPrivateKey')){
  console.log('fetal error :jwtPrivateKey not defined')
   process.exit(1)
 }
db.connect()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/", router);
app.use("/posts",router)
app.use("/up",router)
app.use('/user',router)
app.use("/auth",router)


app.listen(port, () => {
  console.log("server is connected");
});
