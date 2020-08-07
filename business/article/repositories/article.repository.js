'use strict';

const url = 'mongodb://localhost:27017';
const dbName = 'streamDev';

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

async function getArticles() {
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  const db = client.db(dbName);
  const articlesCollection = db.collection('articles');
  const articles = await articlesCollection
    .find({})
    .project({ name: true, _id: false })
    .toArray();
  client.close();
  return articles;
}

const articleSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  client: {ref: clientSchema}
});
const Article = mongoose.model('articles', articleSchema);

async function getArticlesWithMongoose() {
  await mongoose.connect('mongodb://localhost/streamDev', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const articles = await Article.find({}, '-_id name client').populate('client', 'name').lean().exec();
  console.log('a');
  return articles;
}

module.exports = {
  getArticles,
  getArticlesWithMongoose,
};
