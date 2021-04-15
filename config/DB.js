const connection = require('./connection')

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewDepartments() {
        return this.connection.query('SELECT * FROM department');
    }

    createEmployee(employee) {
        return this.connection.query('INSERT INTO employee SET ?', employee)
    }

    viewRole() {
        return this.connection.query('SELECT * FROM role');
    }

    // deleteEmployee() {
        // return this.connection.query('DELETE FROM employee WHERE ?',
        // {
            // flavor: 'strawberry',
        // })
    // }
}

module.exports = new DB(connection);