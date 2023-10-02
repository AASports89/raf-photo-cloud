//DEPENDENCIES & IMPORTS//
const db = require('../config/connection');
const { User, Post, Comment } = require('../models');
const user = require("./user-seeds.json");
const posts = require("./post-seeds.json");
const comments = require("./comment-seeds.json");


db.once('open', async () => {

    try { 
      await Post.deleteMany({});
      await User.deleteMany({});
      await User.create(user);
      for (let i = 0;  i < posts.length; i++) {
      const { _id, username }= await Post.create(posts[i]);
      const user = await User.findOneAndUpdate(
        {username:username},
        {
          $addToSet: {
            posts: _id,
          }
        }
      )
      console.log(user);
      console.log(posts);
    }

} catch (err) {
    console.error(err);
    process.exit(1);
}
  console.log('Success ✅ Seeds planted 🎄');
    process.exit(0);
});