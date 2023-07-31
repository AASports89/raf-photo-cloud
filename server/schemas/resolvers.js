const { AuthenticationError } = require('apollo-server-express');
const { User, Picture, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
//PULL MODEL DATA//
 Query: {
    users: async () => {
      return User.find().populate('pictures');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('pictures');
    },
    pictures: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Picture.find(params).sort({post_time: -1 });
    },
    picture: async (parent, { pictureId }) => {
      return Picture.findOne({ _id: pictureId });
    },
    comments: async () => {
      return Comment.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("pictures");
      }
      throw new AuthenticationError("Please login❗⛔");
    },
  },
//CHANGE MODEL DATA//
  Mutation: {
//CREATE USER//
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Error❗⛔ No user found with this login❗⛔');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Error❗⛔ Invalid login credentials❗⛔');
      }

      const token = signToken(user);

      return { token, user };
    },
//ADD PARLAY//
addPicture: async (parent, { title, image, commentSchema }, context) => {
  if (context.user) {
    const picture = await Picture.create({
      title,
      image,
      commentSchema,
      username: context.user.username,
    });

    await User.findOneAndUpdate(
      { _id: context.user._id },
      { $addToSet: { pictures: picture._id } }
    );

    return picture;
  }
  throw new AuthenticationError("Error❗⛔ Please login to set a picture❗⛔");
},
//ADD COMMENT//
addComment: async (parent, { content }, context) => {
  if (context.user) {
    const commentSchema = await Comment.create({
      content,
      username: context.user.username,
    });

    await User.findOneAndUpdate(
      { _id: context.user._id },
      { $addToSet: { comments: commentSchema._id } }
    );

    return commentSchema;
  }
  throw new AuthenticationError("Error❗⛔ Please login to post a comment❗⛔");
},
//DELETE PARLAY//
  removePicture: async (parent, { pictureId }, context) => {
      if(context.user) {
        const picture = await Picture.findOneAndDelete({
          _id: pictureId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { pictures: picture._id }}
        );
        return picture;
      }
      throw new AuthenticationError("Error❗⛔ Please login to delete picture❗⛔");
    },
  },
};
module.exports = resolvers;