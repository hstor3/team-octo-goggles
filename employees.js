const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

let team = [];

const employeeQuestions = [
    {
        type: 'input',
        name: 'roleId',
        message: "What is the employee's id number?"
    },
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
        type: 'input',
        name: 'department',
        message: "What is the employee's department id?"
    }
];

function promptQuestions() {
    return inquirer.prompt(employeeQuestions)
}

function init() {
    promptQuestions()
}

init();

module.exports = employeeQuestions;

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