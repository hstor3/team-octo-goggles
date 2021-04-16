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

// DB.init(
//     // {
//         {
//             type: 'input',
//             name: 'roleId',
//             message: "What is the employee's id number?"
//         },
//         {
//             type: 'input',
//             name: 'firstName',
//             message: "What is the employee's first name?"
//         },
//         {
//             type: 'input',
//             name: 'lastName',
//             message: "What is the employee's last name?"
//         },
//         {
//             type: 'input',
//             name: 'salary',
//             message: "What is the employee's salary?"
//         },
//         {
//             type: 'input',
//             name: 'department',
//             message: "What is the employee's department id?"
//         },
//     }
// )

module.exports = new DB(connection);