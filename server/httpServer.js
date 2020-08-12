const express = require('express');
const articleController = require('controller/article.controller');

const router = express.Router();

/* GET hellow world */
router.get('/helloWorld', (req, res, next) => {
  res.status(200).send('hello world');
});

router.get('/articles', articleController.getArticles);

module.exports = router;