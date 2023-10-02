//DEPENDENCY & IMPORT//
const { Schema, model } = require("mongoose");
const mongoose = require("../config/connection");

//POST MODEL//
const postSchema = new Schema(
    {
        id: {
            type: Number,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
            title: {
            type: String,
            allowNull: false,
        },
            image: {
            type: String,
            allowNull: false,
        },
            commentSchema: {
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
    },
        {
        mongoose,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    });

    postSchema.virtual('postCount').get(function () 
    {
        return this.posts.length;
    });

    const Post = model("Post", postSchema);

    module.exports = Post;