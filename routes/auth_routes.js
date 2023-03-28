const router = require("express").Router();
const { createUser, loginUser } = require("../controllers/authController");

// SignIn and signUp
router.route("/auth/signup").post(createUser);
router.route("/auth/login").post(loginUser);

module.exports = router;
