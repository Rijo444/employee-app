const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'employee_db'
});

connection.connect((err) => {
    if (err) {
        console.log("Database Connection Failed");
        console.log(err);
        return;
    }

    console.log("Connected to MySQL");
});

module.exports = connection;
