const mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {type: String},
    image: {type: String},
    textBox: {type: String},
    category: {type: String},
    proof:{type: String},
})

const PostsModel = mongoose.model("Posts", PostsSchema);

module.exports = PostsModel;