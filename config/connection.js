const mysql = require('mysql');
require('dotenv').config();
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: process.env.user,
    password: process.env.myPass,
    database: process.env.dBase,
})

connection.connect((err) => {
    if (err) throw err;
})
connection.query = util.promisify(connection.query);
module.exports = connection;