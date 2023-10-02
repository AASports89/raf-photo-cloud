const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
//PULL MODEL DATA//
 Query: {
    users: async () => {
      return User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('posts');
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({Date: -1 });
    },
    post: async (parent, { parlayId }) => {
      return Post.findOne({ _id: postId });
    },
    comments: async () => {
      return Comment.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("posts");
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
addPost: async (parent, { title, image, comment }, context) => {
  if (context.user) {
    const post = await Post.create({
      title,
      image,
      comment,
      username: context.user.username,
    });

    await User.findOneAndUpdate(
      { _id: context.user._id },
      { $addToSet: { posts: post._id } }
    );

    return post;
  }
  throw new AuthenticationError("Error❗⛔ Please login to set a parlay❗⛔");
},
//DELETE PARLAY//
  removePost: async (parent, { postId }, context) => {
      if(context.user) {
        const post = await Post.findOneAndDelete({
          _id: postId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: post._id }}
        );
        return post;
      }
      throw new AuthenticationError("Error❗⛔ Please login to delete parlay❗⛔");
    },
  }
};

module.exports = resolvers;