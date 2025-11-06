const { userModel: User } = require("../model/userModel");
const { createSecretToken } = require("../utils/secretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log("Signup request received:", req.body);
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      password: hashedPassword,
      username,
      createdAt,
    });
    await user.save();
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User signed up successfully", success: true, user });
  } catch (err) {
    console.error("Signup failed:", err);
  }
};
