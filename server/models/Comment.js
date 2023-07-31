const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    comment: {
        type: String,
    },
    post_time: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
});

commentSchema.virtual('commentCount').get(function () {
    return this.comments.length;
  });

const Comment = model("Comment", commentSchema);

module.exports = Comment;