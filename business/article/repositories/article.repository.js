'use strict';

const { Article } = require('db/models/article.model');

async function getArticles() {
  const articles = await Article.find({}, 'name').lean().exec();
  return articles;
}

module.exports = {
  getArticles
};
