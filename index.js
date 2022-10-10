const fs = require("fs");
const inquirer = require("inquirer");

managerQuestions = [
    {
        message: "What's the team managers name?",
        name: "managerName",
    },
    {
        message: "What's your manager's ID number?",
        name: "employeeID",
    },
    {
        message: "What's your manager's email address?",
        name: "emailName",
    },
    {
        message: "What's your manager's office number?",
        name: "managerName",
    },
    {   
        type: "list",
        message: "What role would you like to add to your team?",
        name: "roleName",
        choices: ["Engineer", "Intern", "None, I am finished building my team."]
    },
]

engineerQuestions = [
    {
        message: "What's the engineer's name?",
        name: "managerName",
    },
    {
        message: "What's your engineer's ID number?",
        name: "employeeID",
    },
    {
        message: "What's your engineer's email address?",
        name: "emailName",
    },
    {
        message: "What's your engineer's Github username?",
        name: "managerName",
    },
    {   
        type: "list",
        message: "What role would you like to add to your team?",
        name: "roleName",
        choices: ["Engineer", "Intern", "None, I am finished building my team."]
    },
]

internQuestions = [
    {
        message: "What's your intern's name?",
        name: "managerName",
    },
    {
        message: "What's your intern's ID number?",
        name: "employeeID",
    },
    {
        message: "What's your intern's email address?",
        name: "emailName",
    },
    {
        message: "What's your intern's school?",
        name: "managerName",
    },
    {   
        type: "list",
        message: "What role would you like to add to your team?",
        name: "roleName",
        choices: ["Engineer", "Intern", "None, I am finished building my team."]
    },
]

function init() {
    inquirer.prompt(managerQuestions)
        .then((answers) =>  {
        if (answers.roleName === "Engineer") engineerPrompt();
        else if (answers.roleName === "Engineer") internPrompt();
        }
        )
}

function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
        .then((answers) =>  {
            if (answers.roleName === "Engineer") engineerPrompt();
            else if (answers.roleName === "Intern") internPrompt();
        }
        )
}
function internPrompt() {
    inquirer.prompt(internQuestions)
        .then((answers) =>  {
            if (answers.roleName === "Engineer") engineerPrompt();
            else if (answers.roleName === "Intern") internPrompt();
        }
        )
}

init()