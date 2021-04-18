const connection = require('./connection')

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // Create
    createDepartment(department) {
        return this.connection.query('INSERT INTO department SET ?', department)
    }

    createRole(role) {
        return this.connection.query('INSERT INTO role SET ?', role)
    }

    createEmployee(employee) {
        return this.connection.query('INSERT INTO employee SET ?', employee)
    }

    // Read
    viewDepartments() {
        return this.connection.query('SELECT * FROM department');
    }

    viewRole() {
        return this.connection.query('SELECT * FROM role');
    }

    viewEmployees() {
        return this.connection.query('SELECT * FROM employee');
    }

    // update
    updateDepartment(department, department_name) {
        let sql = `UPDATE department SET name = "${department.name}" WHERE name =  "${department_name}"`
        return this.connection.query(sql)
    }

    updateRole(role, title) {
        let sql = `UPDATE role SET title = "${role.title}", salary = ${role.salary}, department_id = ${role.department_id} WHERE title = "${title}"`
        console.log(sql);
        return this.connection.query(sql)
    }

    updateEmployee(employee, name) {
        let sql = `UPDATE employee SET first_name = "${employee.first_name}", last_name = "${employee.last_name}", role_id = ${employee.role_id} where CONCAT(first_name, ' ', last_name) = "${name}"`
        console.log(sql);
        return this.connection.query(sql);
    }

    getEmployee(first_name, last_name) {
        return this.connection.query('SELECT * FROM employee where first_name = ? and last_name = ?', first_name, last_name);
    }

    // deleteEmployee() {
        // return this.connection.query('DELETE FROM employee WHERE ?',
        // {
            // flavor: 'strawberry',
        // })
    // }
}

module.exports = new DB(connection);