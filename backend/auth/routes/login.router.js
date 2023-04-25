const router = require("express").Router();
const User = require("../models/login.model");
const bcrypt = require("bcryptjs");
const { loginValidation } = require("../../validation");
const jmt = require("jsonwebtoken");
const verify = require("jsonwebtoken/verify");
const check = require("../../vierfiytoken");
require("dotenv").config();

router.post("/", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.json(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.json("email dosent exist");

  const validpass = await bcrypt.compare(req.body.password, user.password);
  if (!validpass) return res.json("invalid password");

  const token = jmt.sign({ _id: user._id }, process.env.SECRET_TOKEN, {
    expiresIn: 60 * 60,
  });
  res
    .header("auth-token", token)
    .send({ data: { token: token, username: user.username } });
});

router.get("/auth", check, (req , res) => {
  res.json(true);
});

router.get("/all/users" , async (req ,res)=> {
  const all = await User.find();
  res.json(all)
})
router.delete('/delete/all/:id' , async (req , res) => {
  User.findByIdAndRemove(req.params.id)
  .then(() => res.json('deleted'))
  .catch(err => res.json('cant delete'))
})

module.exports = router;
