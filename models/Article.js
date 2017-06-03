const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  url: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  abstract: {
    type: String
  }
});

module.exports = mongoose.model("Article", ArticleSchema);
