"use strict";

const articleRepository = require('./repositories/article.repository');

async function getArticles() {
  return (await articleRepository.getArticles());
}

module.exports = {
  getArticles
}