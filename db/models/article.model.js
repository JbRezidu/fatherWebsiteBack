'use strict';

const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number
});
const Article = mongoose.model('articles', articleSchema);

module.exports = {
  Article
};
