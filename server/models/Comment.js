const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    image: {
        type: String,
    },
    comment: {
        type: String,
    },
    dateFormat: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
});

commentSchema.virtual('commentCount').get(function () {
    return this.posts.length;
  });

const Comment = model("Comment", commentSchema);

module.exports = Comment;