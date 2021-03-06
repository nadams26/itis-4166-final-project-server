const express = require('express')
const mysql = require('mysql')
const path = require('path')
const app = express()
const port = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host : 'sql9.freemysqlhosting.net',
    user : 'sql9381937',
    password : 'Uxb6wdhdgI',
    database: 'sql9381937'
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/budget', (req, res) => {
  connection.connect();
    connection.query('SELECT * FROM sql9381937.budget_table', function (error, results, fields) {
        connection.end();
        if (error) throw error;
        res.json(results);
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})