const express = require("express");

const router = express.Router();
const verifyToken = require("../middleware/auth");
const Post = require("../models/post");

//@route GET api/posts
//@descriptioL Read post
//@access Private

router.get("/", verifyToken, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.userId }).populate("user", [
      "username",
    ]);
    res.json({ success: true, posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//@route POST api/posts
//@description Create post
//@access Private

router.post("/", verifyToken, async (req, res) => {
  const { title, description, url, status } = req.body;
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
      user: req.userId,
    });
    await newPost.save();

    res.json({ success: true, message: "Happy learning!", post: newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//@route PUT api/posts
//@descriptioL Update post
//@access Private

router.put("/:id", verifyToken, async (req, res) => {
  const { title, description, url, status } = req.body;
  if (!title)
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  try {
    // tao post moi
    let updatePost = {
      title,
      description: description || "",
      url: (url.startsWith("https://") ? url : `https://${url}`) || "",
      status: status || "TO LEARN",
    };

    const postUpdateCondition = { _id: req.params.id, user: req.userId };

    updatePost = await Post.findOneAndUpdate(postUpdateCondition, updatePost, {
      new: true,
    });

    //User not authorised to update post

    if (!updatePost)
      return res.status(401).json({
        success: false,
        message: "Post not found or user not authorized",
      });
    res.json({ success: true, message: "Excellent progress" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

//@route DELETE api/posts
//@descriptioL Delete post
//@access Private

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    // delete post
    const postDeleteCondition = { _id: req.params.id, user: req.userId };
    const deletedPost = await Post.findOneAndDelete(postDeleteCondition);

    //User not authorised to delete post

    if (!deletedPost)
      return res.status(401).json({
        success: false,
        message: "Post not found or user not authorized",
      });
    res.json({ success: true, post: deletedPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
