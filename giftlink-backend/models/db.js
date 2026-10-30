// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL;
const client = new MongoClient(url);

let dbInstance = null;
const dbName = 'giftdb';

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    // Task 1: Connect to MongoDB
    await client.connect();

    // Task 2: Select the database
    dbInstance = client.db(dbName);

    // Task 3: Return the database instance
    return dbInstance;
}

module.exports = connectToDatabase;