const mysql = require('mysql2');
require('dotenv').config();

const my_db = process.env.MYSQL_DB

const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: my_db
    },
    // console.log(`Connected to the ${my_db} database.`)
);


module.exports = db;