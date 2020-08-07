"use strict";

const articleService = require('../business/article/article.service');

async function getArticles(req, res, next) {
  const articles = await articleService.getArticles();
  res.status(200).send(articles);
}

module.exports = {
  getArticles
}
