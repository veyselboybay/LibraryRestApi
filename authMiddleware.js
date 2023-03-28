const jwt = require("jsonwebtoken");

const authCheck = async (req, res, next) => {
  // check if the user has any token for access
  const token = await req.header("auth-token");
  if (!token) {
    return res.status(401).json("Access Denied!");
  }
  // check if the token is valid one
  //   const validToken = await jwt.verify(token, process.env.JWT_SECRET);
  //   if (!validToken) {
  //     return res.status(401).json("Access Denied! - Not Valid Token!");
  //   }
  //   next();
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).json("Access Denied! - Not Valid Token!");
    }
    next();
  });
};

module.exports = authCheck;
