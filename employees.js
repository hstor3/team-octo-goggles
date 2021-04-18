const inquirer = require('inquirer');
const index = require('./index')
const fs = require('fs');
const path = require('path');
const DB = require('./config/DB');
let table = '';
let operation = '';
let currentEmployee = '';
let currentRole = '';
let currentDepartment = '';

// let team = [];

// class Team {

const roleQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the role title you would like to add?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for this role?'
    },
    {
        type: 'input',
        name: 'department_id',
        message: "What department does the employee work in?",
        // choices: ['Accountant', 'Account Manager', 'Sales Rep', 'Sales Lead', 'Junior Developer', 'Senior Software Developer', 'Legal Assistant', 'Lawyer']
    },
];

const departmentQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What department would you like to add?'
    },
];

const employeeQuestions = [
    {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?"
    },
    {
        type: 'input',
        name: 'role_id',
        message: "What is the employee's role id?"
    },
];

function promptInfo() {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'operation',
            message: 'Would you like to add, view, update, or delete?',
            choices: ['add', 'view', 'update', 'delete']
        },
    )
        .then((answer) => {
            operation = answer.operation
            if (operation === 'add') {
                return add()
            } else if (operation === 'view') {
                return view()
            } else if (operation === 'update') {
                edit()
            } else if (operation === 'delete') {
                return remove()
            } else {
                return promptObject()
            }
        })
}

function promptObject() {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'object',
            message: 'What table would you like to use?',
            choices: ['employee', 'role', 'department']
        }
    )
        .then((choice) => {
            table = choice.object;
            return promptInfo()
        })
}

function edit() {
    if (table === 'employee') {
        DB.viewEmployees()
            .then(res => {
                let employees = res.map(row => {
                    return `${row.first_name} ${row.last_name}`
                });

                return inquirer.prompt(
                    {
                        type: 'list',
                        name: 'employee',
                        message: 'Which employee would you like to edit?',
                        choices: employees,
                    }
                )
            })
            .then((answer) => {
                currentEmployee = answer.employee;
                return inquirer.prompt(employeeQuestions)
                    .then(answers => {
                        DB.updateEmployee(answers, currentEmployee)
                    })
            })
            .then(() => {
                return promptObject()
            })
    } else if (table === 'department') {
        DB.viewDepartments()
            .then(res => {
                let department = res.map(row => {
                    return row.name
                });

                return inquirer.prompt(
                    {
                        type: 'list',
                        name: 'department',
                        message: 'Which department would you like to edit?',
                        choices: department,
                    }
                )
            })
            .then((answer) => {
                currentDepartment = answer.department;
                return inquirer.prompt(departmentQuestions)
                    .then(answers => {
                        DB.updateDepartment(answers, currentDepartment)
                    })
                    .then(() => {
                        return promptObject()
                    })
            })
    } else if (table === 'role') {
        DB.viewRole()
            .then(res => {
                let roles = res.map(row => {
                    return row.title;
                });

                return inquirer.prompt(
                    {
                        type: 'list',
                        name: 'role',
                        message: 'Which role would you like to edit?',
                        choices: roles,
                    }
                )
            })
            .then((answer) => {
                currentRole = answer.role;
                return inquirer.prompt(roleQuestions)
                    .then(answers => {
                        DB.updateRole(answers, currentRole)
                    })
                    .then(() => {
                        return promptObject()
                    })
            })
    }
}

function remove() {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'delete',
            message: 'Would you like to delete an employee?',
        },
    )
        .then(direction => {
            if (direction.delete === true) {
                return
            }
        })
}

function view() {
    if (table === 'employee') {
        DB.viewEmployees().then(res => {
            console.table(res)
        })
    } else if (table === 'department') {
        DB.viewDepartments().then(res => {
            console.table(res)
        })
    } else if (table === 'role') {
        DB.viewRole().then(res => {
            console.table(res)
        })
    }
    return promptObject()
}

function add() {
    if (table === 'employee') {
        return inquirer.prompt(employeeQuestions)
            .then(answers => {
                DB.createEmployee(answers)
                // .then(res => {
                    // console.log(res)
                // })
            })
            .then(() => {
                promptObject()
            })
    } else if (table === 'department') {
        return inquirer.prompt(departmentQuestions)
            .then(answers => {

                DB.createDepartment(answers)
                // .then(res => {
                    // console.log(res)
                // })
            })
            .then(() => {
                promptObject()
            })
    } else if (table === 'role') {
        return inquirer.prompt(roleQuestions)
            .then(answers => {

                DB.createRole(answers)
                // .then(res => {
                    // console.log(res)
                // })
            })
            .then(() => {
                promptObject()
            })
    }
    return promptObject()
}

function viewTables() {

    DB.viewDepartments().then(departments => console.table(departments))

    DB.viewEmployees().then(res => { console.table(res) })

    DB.viewRole().then(roles => console.table(roles))

        .then(() => {
            promptObject()
        })
}

viewTables();


// viewTables();
// };
// }

// module.exports = Team;