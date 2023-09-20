const express = require("express");

const router = express.Router();

const Post = require("../models/post");

//@ route api/posts
//@description L Create post
//@access Private

router.post("/posts", async (req, res) => {
  const { title, descripton, url, status } = req.body;
  //Simple validate
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  try {
    // tao post moi
    const newPost = new Post({
      title,
      description,
      url: url.startsWith("https://") ? url : `https://${url}`,
      status: status || "TO LEARN",
      user: "650a1f2201468aa138d46a86",
    });
    await newPost.save();

    res.json({ success: true, message: "Happy learning!", post: newPost });
  } catch (error) {
    console.logerror();
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
