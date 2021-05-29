// TODO: Establish connection to mysql database
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'pokedex'
})

db.connect(err => {
  err ? console.log('mysql suuuuucks') : console.log('Hell yeah mysql works')
})

module.exports = db;