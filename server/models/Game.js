const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat');

const gameSchema = new Schema({
    home_team: {
        type: String,
    },
    away_team: {
        type: String,
    },
    commence_time: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
});

gameSchema.virtual('gameCount').get(function () {
    return this.games.length;
  });

const Game = model("Game", gameSchema);

module.exports = Game;