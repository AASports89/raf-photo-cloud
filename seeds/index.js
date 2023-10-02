//DEPENDENCIES & IMPORTS//
    const mongoose = require("../config/connection");
    const User = require("../models/User");
    const Post = require("../models/Post");
    const Comment = require("../models/Comment");
    const userData = require("./user-seeds.json");
    const postData = require("./post-seeds.json");
    const commentData = require("./comment-seeds.json");

//CREATE TABLES & SEED FOR TESTING//
    const seedDatabase = async () => {
        await mongoose.sync({ force: true });

        await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
        });

        await Post.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
        });

        await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
        });

        process.exit(0);
    };

    seedDatabase();