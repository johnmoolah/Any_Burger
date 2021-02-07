const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3600,
    password: 'Lexo510$',
    database: 'burgers_db'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected: ", connection.threadId);
    }
});