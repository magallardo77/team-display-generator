const fs = require("fs");
const inquirer = require("inquirer");

questions = [
    {
        message: "What's the team managers name?",
        name: "managerName",
    },
    {
        message: "What's your employee ID number?",
        name: "employeeID",
    },
    {
        message: "What's your email address?",
        name: "emailName",
    },
    {
        message: "What's your office number?",
        name: "managerName",
    },
    {   
        type: "list",
        message: "What role would you like to finish building out your team?",
        name: "roleName",
        choices: ["Engineer", "Intern"]
    },
    {
        message: "What's your office number?",
        name: "managerName",
    },
]