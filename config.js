require('dotenv')

function getDatabaseURI() {
    return process.env.DATABASE_URL || `...missing database URL...`
}

console.log('---')
console.log('Database URI:', getDatabaseURI())
console.log('---')

module.exports = {
  getDatabaseURI
}
