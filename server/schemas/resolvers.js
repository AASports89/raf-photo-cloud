const { AuthenticationError } = require('apollo-server-express');
const { User, Parlay, Game } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
//PULL MODEL DATA//
 Query: {
    users: async () => {
      return User.find().populate('parlays');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('parlays');
    },
    parlays: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Parlay.find(params).sort({commence_time: -1 });
    },
    parlay: async (parent, { parlayId }) => {
      return Parlay.findOne({ _id: parlayId });
    },
    games: async () => {
      return Game.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("parlays");
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
addParlay: async (parent, { home_team, away_team, price, point }, context) => {
  if (context.user) {
    const parlay = await Parlay.create({
      home_team,
      away_team,
      price,
      point,
      username: context.user.username,
    });

    await User.findOneAndUpdate(
      { _id: context.user._id },
      { $addToSet: { parlays: parlay._id } }
    );

    return parlay;
  }
  throw new AuthenticationError("Error❗⛔ Please login to set a parlay❗⛔");
},
//DELETE PARLAY//
  removeParlay: async (parent, { parlayId }, context) => {
      if(context.user) {
        const parlay = await Parlay.findOneAndDelete({
          _id: parlayId,
          username: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { parlays: parlay._id }}
        );
        return parlay;
      }
      throw new AuthenticationError("Error❗⛔ Please login to delete parlay❗⛔");
    },
  }
};

module.exports = resolvers;