const MongoClient = require('mongodb').MongoClient;

const connection = MongoClient
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(client => client.db());

module.exports = collection => {
    return connection.then(db => {
        return db.collection(collection);
    });
};
