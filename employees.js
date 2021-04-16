const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
// const DB = require('./config/DB');

let team = [];

const employeeQuestions = [
    {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?"
    },
    {
        type: 'input',
        name: 'salary',
        message: "What is the employee's salary?"
    },
    {
        type: 'list',
        name: 'department',
        message: "What department does the employee work in?",
        choices: ['Accountant', 'Account Manager', 'Sales Rep', 'Sales Lead', 'Junior Developer', 'Senior Software Developer', 'Legal Assistant', 'Lawyer']
    }
];

function promptQuestions() {
    return inquirer.prompt(employeeQuestions)
}

function editEmployee() {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'edit',
            message: 'Would you like to edit an employee?'
        },
    )
    .then(direction => {
        if (direction.edit === true) {
            return 
            // make a function to select employee from table
        }
    })
}

function deleteEmployee() {
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
            // list of employees to choose from
        }
    })
}

function viewEmployees() {
    return inquirer.prompt(
        {
            type: 'confirm',
            name: 'view',
            message: 'Would you like to view the employees?',
        },
    )
    .then(direction => {
        if (direction.view === true) {
            return
            // list of employees to view
        }
    })
}

function init() {
    promptQuestions()
}

init();


// first & last name
// id
// title
// salary
// department id
// add departments, roles, employees at minimum
// view or update

// function promptManager() {
//     return inquirer.prompt(questionsManager).then(answers => {
//         const manager = new Manager(answers.managerName, answers.managerIdNum, answers.managerEmail, answers.office)
//         team.push(manager)
//     })
//         .then(() => {
//             return promptAnother()
//         })
// }
// function promptAnother() {
//     return inquirer.prompt(
//         {
//             type: 'confirm',
//             name: 'another',
//             message: 'Would you like to add another employee?'
//         },
//     )
//         .then(direction => {
//             if (direction.another === true) {
//                 // init()
//                 return promptQuestions()
//             }
//         })
// }