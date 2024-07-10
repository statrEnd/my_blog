const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'myblog',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

db.connect(error => {
    if (error) {
        console.error('An error occurred while connecting to the DB: ' + error.stack);
        return;
    }

    console.log('Connected to the database as ID ' + db.threadId);
});


module.exports = db.promise();