const mysql = require('mysql');

const db = mysql.createConnection({
    host: '172.26.0.2',
    user: 'root',
    password: 'Sung2708@',
    database: 'online_academy',
    port: 3307
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

module.exports = db;