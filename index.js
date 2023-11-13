const express = require('express')
const app = express()
const port = 3000
const os = require('os');
const mysql = require('mysql');

// let conn = mysql.createConnection({
//   host: '',
//   user: '',
//   password: '',
//   database: '',
//   port: 0
// });

let result = 'not yet';

// conn.connect();

// conn.query('SELECT m.* from menu m', function(err, rows, fields) {
//   if (err) throw err;
//     console.log('The result is: ', rows[0]);
//     result = rows;
// }); 

// conn.end();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// app.get('/menu', (req, res) => {
//   res.json(result);
// })

app.get('/hostname', (req, res) => {
  res.send(os.hostname());
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
