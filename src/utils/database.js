const mysql = require('mysql2/promise');

pool = mysql.createPool({
    host: 'db.fseason.info',
    user: 'numna',
    password: '0811lee0811lee',
    database: 'dbnumna'

});

module.exports = pool;