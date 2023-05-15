const mongoose = require("mongoose");

const PostsSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  textBox: {
    type: String,
  },
  category: {
    type: String,
  },
  proof: {
    type: String,
  },
  total_likes: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Array,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const PostsModel = mongoose.model("Posts", PostsSchema);

module.exports = PostsModel;
