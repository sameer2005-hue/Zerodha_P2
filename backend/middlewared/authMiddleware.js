const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token found" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id); // must match token payload

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user; // attach user to request
    next();
  } catch (err) {
    console.error("JWT verify error:", err);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
