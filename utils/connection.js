const mysql = require('mysql2');

const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username,
        user: 'root',
        password: process.env.MYSQL_PASSWORD,
        database: 'movie_db'
    },
    console.log(`Connected to the ########## database.`)
);

module.exports = db;