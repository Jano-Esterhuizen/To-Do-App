require("dotenv").config();

const config = require("./config.json");
const mongoose = require("mongoose");

mongoose.connect(config.connectionString)

const User = require("./models/user.model");
const Note = require("./models/note.model");

const express = require("express");
const cors = require("cors");
const app = express();

const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./utilities");

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ data: "hello" });
});

// Create account
app.post("/create-account", async (req, res) => {

  const { fullName, email, password } = req.body;

  if (!fullName) {
    return res.status(404).json({ error: true, message: "Please enter your full name" });
  }

  if (!email) {
    return res.status(400).json({ error: true, message: "Please enter your email" });
  }

  if (!password) {
    return res.status(400).json({ error: true, message: "Please enter your password" });
  }

  const isUser = await User.findOne({ email: email });

  if (isUser) {
    return res.json({ error: true, message: "User already exists" });
  }

  const user = new User({
    fullName: fullName,
    email: email,
    password: password
  });

  await user.save();

  const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "36000m"});

  return res.json({ 
    error: false,
    user: user, 
    accessToken: accessToken, 
    message: "Account created successfully" });

});

// Login
app.post("/login", async (req, res) => {
  
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({ error: true, message: "Please enter your email" });
  }

  if (!password) {
    return res.status(400).json({ error: true, message: "Please enter your password" });
  }

  const userInfo = await User.findOne({ email: email });

  if (!userInfo) {
    return res.status(404).json({ error: true, message: "User not found" });
  }

  if (userInfo.email == email && userInfo.password == password) {
    const user = { user: userInfo };
    const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "36000m"});
    
  

  return res.json({ 
    error: false,
    user: user, 
    email: email,
    accessToken: accessToken, 
    message: "Login successful" });

  } else {
    return res.status(400).json({ error: true, message: "Invalid credentials" });
  }

});

// Add Note
app.post("/add-note", authenticateToken, (req, res) => {
  const { title, content, tags } = req.body;
  const { user } = req.user;
  
  if (!title) {
    return res.status(400).json({ error: true, message: "Please enter a title" });
  } 

  if (!content) {
    return res.status(404).json({ error: true, message: "Please enter a content" });
  }

  try {
    const note = new Note({
      userId: user._id,
      title: title,
      content: content,
      tags: tags || []
    });
  
    note.save();
  
    return res.json({ 
      error: false, 
      note: note,
      message: "Note added successfully" 
    });
    
  } catch (error) {
    return res.status(500).json({ 
      error: true, 
      message: "Internal server error" 
    });
  }
  
});

app.listen(8000);

module.exports = app;
