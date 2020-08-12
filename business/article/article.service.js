"use strict";

const articleRepository = require('./repositories/article.repository');

async function getArticles() {
  return (await articleRepository.getArticles()).map(article => article.name);
}

module.exports = {
  getArticles
}