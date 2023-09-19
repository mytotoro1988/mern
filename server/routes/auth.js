const express = require("express");
const router = express.Router();
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
// router.get("/", (req, res) => res.send("USER ROUTE"));

// @route POST api/auth/register
// @route Register user
//@access Public

router.post("/register", async (req, res) => {
  console.log("123");
  const { username, password } = req.body;

  //Simple validate
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username or password" });

  try {
    //check xem k co ai co username giong nhau
    const user = await User.findOne({ username });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "username already used" });

    //all good
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    // return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      success: true,
      accessToken: accessToken,
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
