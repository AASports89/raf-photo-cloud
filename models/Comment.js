//DEPENDENCY & IMPORT//
    const { Schema, model } = require("mongoose");
    const mongoose = require("../config/connection");

//COMMENT MODEL//
const commentSchema = new Schema(
    {
        id: {
            type: Number,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
            comment: {
            type: String,
            allowNull: false,
        },
            image: {
            type: String,
            allowNull: false,
        },
            author_id: {
            type: Number,
            allowNull: false,
            references: {
                model: "user",
                key: "id",
            },
        },
            post_id: {
            type: Number,
            allowNull: false,
            references: {
                model: "post",
                key: "id",
            },
        },
    },
        {
        mongoose,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    });

    commentSchema.virtual('commentCount').get(function () 
    {
        return this.comments.length;
    });

    const Comment = model("Comment", commentSchema);

    module.exports = Comment;