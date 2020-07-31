const express = require('express');
const router = express.Router();

/* GET hellow world */
router.get('/helloWorld', (req, res, next) => {
  res.status(200).send('hello world');
});

module.exports = router;
