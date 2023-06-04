const mysql = require('mysql')
const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'wedding-api'
})

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = db