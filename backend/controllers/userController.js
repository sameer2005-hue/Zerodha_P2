const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

module.exports.getUserInfo = async (req, res) => {
  try {
    const token = req.cookies.token; // client se aayi cookie

    if (!token) {
      return res.status(401).json({ success: false, message: "No token found" });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // get user from DB
    const user = await User.findById(decoded.id).select("username email");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      user: user,
    });
  } catch (err) {
    console.error("Error fetching user info:", err);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};
