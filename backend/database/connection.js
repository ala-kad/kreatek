const mysql = require('mysql');
const mysql2 = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'my_db'
},{
  dialect: "mysql",
  dialectModule: "mysql2"
})

connection.connect((err) => {
    if(err) throw err;
    console.log('connectd');
})

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()

module.exports = connection;