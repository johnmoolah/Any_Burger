const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    password: 'Lexo510$',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } 
        console.log("connected: ", connection.threadId);
    });