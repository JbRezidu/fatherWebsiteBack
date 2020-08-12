'use strict';

const mongoose = require('mongoose');
const dbConfig = require('./db.config.json');


async function initDatabaseConnection() {
  await mongoose.connect(`${dbConfig.uri}/${dbConfig.dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: dbConfig.poolSize
  });
}


module.exports = {
  initDatabaseConnection,
  mongoose
}