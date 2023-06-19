const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const parlaySchema = new Schema({
    home_team: {
        type: String,
        required: false,
      },
    away_team: {
        type: String,
        required: false,
      },
    price: {
        type: Number,
        required: false
      },
    point: {
        type: Number,
        required: false
      },
    commence_time: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
  });

const Parlay = model('Parlay', parlaySchema)

module.exports = Parlay;