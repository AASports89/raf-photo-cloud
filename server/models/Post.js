const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
    title: {
        type: String,
        required: false,
      },
    image: {
        type: String,
        required: false,
      },
    commentSchema: {
        type: String,
        required: false
      },
    dateFormat: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
  });

const Post = model('Post', postSchema)

module.exports = Post;