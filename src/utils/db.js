const db = require('mysql');

const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'online_academy'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Database connected');
    }
});

module.exports = connection;