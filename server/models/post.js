const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String },
  status: { type: String, enum: ["TO LEARN", "LEARNING", " LEARNED", "LOVE"] },
  user: {
    type: Schema.Types.ObjectId, // đường nối sang bảng user
    ref: "users", // tên nối sang bảng user
  },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("posts", PostSchema);
