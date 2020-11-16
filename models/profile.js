const mongoose = require(mongoose);
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  website: {
    type: String,
    required: false
  },
  facebook: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  dayofbirth: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('profile', ProfileSchema)