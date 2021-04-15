const DB = require('./config/DB');
const inquirer = require('inquirer');
require('console.table');

DB.viewDepartments().then(departments => console.table(departments))

const employee = {
    first_name: 'Eugene',
    last_name: 'Levy',
    role_id: 5,
    manager_id: null
}

DB.createEmployee(employee).then(res => {
    console.log(res)
})

DB.viewRole().then(roles => console.table(roles))

// method get employee by department
// 