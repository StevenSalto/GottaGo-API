const { Client } = require('pg');
const { getDatabaseURI } = require('./config')

const db = new Client({ connectionString:getDatabaseURI() })

db.connect((err) => {
if (err) {
    console.error('Connection error', err.stack);
    } else {
    console.log('Successfully connected to postgres db!');
    }
});

module.exports = db;
