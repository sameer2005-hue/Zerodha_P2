const { Signup, Login, Logout } = require("../controllers/authController");
const { userVerification } = require("../middlewared/authMiddleware");
const router = require("express").Router();

router.post("/", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

module.exports = router;
