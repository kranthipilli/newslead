const config = require("config")
const Post = require("../postModel");
const { v4: uuidv4 } = require("uuid");
const { findByIdAndUpdate } = require("../postModel");
const mongoose = require("mongoose");
const User = require("../userModel");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const Joi = require("joi")
var jwt = require('jsonwebtoken');
const generateAuthToken =require("../validate-User")


// function validate(req){
//     const schema =Joi.object({
//       email:Joi.string().min(5).max(255).required(),
//       password:Joi.string().min(5).max(1024).required()
//     })
//     return schema.validate(req);
//   }


exports.viewPost = async (req, res) => {
  const response = await Post.find({});
  res.render("home", { data: response });
};

exports.PostNews = async (req, res) => {
  const newbook = new Post({ ...req.body, id: uuidv4() });
  const data = await newbook.save();
  res.redirect("/home");
  console.log(newbook);
};

exports.createPost = async (req, res) => {
  res.render("add-post");
};

exports.deletePost = async (req, res) => {
  const id = req.params["id"];
  const response = await Post.deleteOne({ id });
  res.redirect("/home");
};
exports.updatePage = async (req, res) => {
  res.render("update-post");
};

exports.updatePage = async (req, res) => {
  const id = req.params["id"];
  const result = await Post.find({ id });
  console.log(result);
  res.render("update-post", { data: result });
};
exports.updatePost = async (req, res) => {
  const id = req.params["id"];
  const update = req.body;
  const result = Post.findOneAndReplace({ id }, update);
  console.log(result);
  res.redirect("/home");
};
exports.userPage = async (req, res) => {
  let person = await User.findOne({ email: req.body.email });
  if (!person) return res.send("Incorrect email or password!");
 
  const validPassword=await bcrypt.compare(req.body.password,person.password)
  if (!validPassword) return res.send("Incorrect email or password!");
 const token = generateAuthToken(person)
  res.send(token)
};




