const DB = require('./config/DB');
const inquirer = require('inquirer');
require('console.table');

function viewTables() {
    
    DB.viewDepartments().then(departments => console.table(departments))
    
    DB.viewEmployees().then(res => {console.table(res)})
    
    DB.viewRole().then(roles => console.table(roles))
}
viewTables();
