const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'afif',
    password: 'asd123',
    database: 'latihandb',
    port: 3306,
    multipleStatements: true
});

module.exports = db;