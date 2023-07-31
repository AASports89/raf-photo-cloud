const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const pictureSchema = new Schema({
  title: {
    type: String,
    required: false,
  },  
  image: {
        type: String,
        required: false,
      },
  commentSchema: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ],
  post_time: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
  });

  pictureSchema.virtual('pictureCount').get(function () {
    return this.pictures.length;
  });

const Picture = model('Picture', pictureSchema)

module.exports = Picture;