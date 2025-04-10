const express = require("express");
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const { SignUpDataValidation } = require("../utils/validation");
const User = require("../models/user");

authRouter.post("/signup", async (req, res) => {
  try {
    //validation of Data
    SignUpDataValidation(req);

    const { firstName, lastName, emailId, password } = req.body;

    //Encrypt password
    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    const savedUser = await user.save();
    const token = await savedUser.getJWT();
    console.log(token);
    //send cookie
    res.cookie("token", token, {
      httpOnly: true, // Prevent JavaScript access for security
      secure: true,    // Send only over HTTPS (needed for deployment)
      sameSite: "None", // Required for cross-origin cookies
      expires: new Date(Date.now() + 8 * 3600000)
    });

    res.json({ message: "User added successfully", data: savedUser });
  } catch (err) {
    res.status(400).send("Error saving User: " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!validator.isEmail(emailId)) {
      throw new Error("Please enter valid email");
    }
    //check user present in db
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Please enter valid Credentials");
    }
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      //create jwt
      const token = await user.getJWT();
      console.log(token);
      //send cookie
      // res.cookie("token", token, {
      //   expires: new Date(Date.now() + 8 * 3600000),
      // });
      res.cookie("token", token, {
        httpOnly: true, // Prevent JavaScript access for security
        secure: true,    // Send only over HTTPS (needed for deployment)
        sameSite: "None", // Required for cross-origin cookies
        expires: new Date(Date.now() + 8 * 3600000)
      });
      
      res.send(user);
    } else {
      throw new Error("Invalid Password");
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

authRouter.post("/logout", async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,  // Required if using HTTPS (Vercel + Render)
    sameSite: "None",
  });

  res.status(200).json({ message: "Logout Successful" });
});

module.exports = authRouter;
