const db = require('../config/connection');
const { User, Picture, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const pictures = require('./pictures.json');
const comments = require('./comments.json');

db.once('open', async () => {

  try { 
    await Picture.deleteMany({});
    await Comment.deleteMany({});
    await User.deleteMany({});
    await User.create(userSeeds);
    await Comment.create(comments);
    for (let i = 0;  i < pictures.length; i++) {
    const { _id, username } = await Picture.create(pictures[i]);
    const user = await User.findOneAndUpdate(
      {username:username},
      {
        $addToSet: {
          pictures: _id,
          comments: _id,
        }
      }
    )
    console.log(userSeeds);
  }

} catch (err) {
    console.error(err);
    process.exit(1);
}
  console.log('Success ✅ Seeds planted 🎄');
    process.exit(0);
});