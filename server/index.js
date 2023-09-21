const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.y9role1.mongodb.net/mern-learnit?retryWrites=true&w=majority`
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

connectDB();
const app = express();

app.get("/", (req, res) =>
  res.send("hello world! wellcome to fullstack. commit from dev")
);

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(` Server stared on port : ${PORT}`));
