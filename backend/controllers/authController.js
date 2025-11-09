const User = require("../model/userModel");
const { createSecretToken } = require("../utils/secretToken");
const bcrypt = require("bcrypt");

/*  sign up route..

1. access email, password, username from req.body
2. check fo if user esiting from email
3. create user from email, username, password

*/

module.exports.Signup = async (req, res) => {
  try {
    console.log("Signup request received:", req.body);
    const { email, password, username } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // Create new user
    const user = await User.create({ email, password, username });

    // Create token
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false,
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully",
      user: { username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("Signup failed:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/*  login routes
1. access username, password
2. find
3. compare
*/

module.exports.Login = async (req, res) => {
  try {
    console.log("🟢 Login request received:", req.body);
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({ username });
    console.log("🔍 Found user:", user);

    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect username or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    console.log("🔐 Password match result:", auth);

    if (!auth) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect username or password" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false,
      maxAge: 24 * 60 * 60 * 1000,
    });

    console.log("✅ Login successful for user:", user.username);

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: { username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("❌ Login failed:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports.Logout = async (req, res, next) => {
  res.clearCookie("token", {
    httpOnly: true,
    smaeSite: "Lax",
    secure: false,
  });
  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
