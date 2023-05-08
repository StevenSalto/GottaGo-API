const { Client } = require('pg');
const { getDatabaseURI } = require('./config')

const db = new Client({ connectionString:getDatabaseURI() })

db.connect((err) => {
if (err) {
    console.error('Connection Error', err.stack);
    } else {
    console.log('Successful Database Connection...');
    }
});

module.exports = db;
