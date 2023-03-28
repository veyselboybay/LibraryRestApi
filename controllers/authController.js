const userModel = require("../models/user");
const { loginSchema, userSchema } = require("../validation/joiValidation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  // check if the req data is valid
  const { error } = await userSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }
  // check if the user already exists
  const user = await userModel.find({ email: req.body.email });
  if (user) {
    return res.status(400).json("User already exists!");
  }
  // crypt the password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  try {
    const newUser = await userModel({
      ...req.body,
      password: hashedPass,
    });
    const savedUser = await newUser.save();
    return res.status(200).json(savedUser);
  } catch (err) {
    return res.json(err);
  }
};

const loginUser = async (req, res) => {
  // check if the user data valid
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }
  // Check if the user exists!
  const user = await userModel.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json("User doesn't exist!");
  }
  // check if the password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(401).json("Invalid Email/Password");
  }
  // issue a jwt token for authentication
  const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  return res.status(200).json(token);
};

module.exports = { createUser, loginUser };
