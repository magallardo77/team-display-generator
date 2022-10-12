const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/generateHTML");

// Array of questions when running the file in node
managerQuestions = [
    {
        message: "What's the team managers name?",
        name: "managerName",
    },
    {
        message: "What's your manager's ID number?",
        name: "managerId",
    },
    {
        message: "What's your manager's email address?",
        name: "managerEmail",
    },
    {
        message: "What's your manager's office number?",
        name: "managerOffice",
    },
    {   
        type: "list",
        message: "What role would you like to add to your team?",
        name: "employeeRole",
        choices: ["Engineer", "Intern", "None, I am finished building my team."]
    },
]

engineerQuestions = [
    {
        message: "What's the engineer's name?",
        name: "engineerName",
    },
    {
        message: "What's your engineer's ID number?",
        name: "engineerId",
    },
    {
        message: "What's your engineer's email address?",
        name: "engineerEmail",
    },
    {
        message: "What's your engineer's Github username?",
        name: "engineerGithub",
    },
    {   
        type: "list",
        message: "What role would you like to add to your team?",
        name: "employeeRole",
        choices: ["Engineer", "Intern", "None, I am finished building my team."]
    },
]

internQuestions = [
    {
        message: "What's your intern's name?",
        name: "internName",
    },
    {
        message: "What's your intern's ID number?",
        name: "internId",
    },
    {
        message: "What's your intern's email address?",
        name: "internEmail",
    },
    {
        message: "What's your intern's school?",
        name: "internSchool",
    },
    {   
        type: "list",
        message: "What role would you like to add to your team?",
        name: "employeeRole",
        choices: ["Engineer", "Intern", "None, I am finished building my team."]
    },
]

let membersObjArray = [];

//Functions used to generate questions and creates new file with user input
function init() {
    inquirer.prompt(managerQuestions)
        .then((answers) =>  {
            let newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)

            membersObjArray.push(newManager)

        if (answers.employeeRole === "Engineer") engineerPrompt();
        else if (answers.employeeRole === "Intern") internPrompt();
        else {
            fs.writeFile("./dist/index.html", generateHTML(membersObjArray), (err) => err ? console.log("failed") : console.log("Success!"));
        }
        }
        )
}

function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
        .then((answers) =>  {
            let newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)

            membersObjArray.push(newEngineer)
            if (answers.employeeRole === "Engineer") engineerPrompt();
            else if (answers.employeeRole === "Intern") internPrompt();
            else {
                fs.writeFile("./dist/index.html", generateHTML(membersObjArray), (err) => err ? console.log("failed") : console.log("Success!"));
            }
        }
        )
}
function internPrompt() {
    inquirer.prompt(internQuestions)
        .then((answers) =>  {
            let newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)

            membersObjArray.push(newIntern)
            if (answers.employeeRole === "Engineer") engineerPrompt();
            else if (answers.employeeRole === "Intern") internPrompt();
            else {
                fs.writeFile("./dist/index.html", generateHTML(membersObjArray), (err) => err ? console.log("failed") : console.log("Success!"));
            }
        }
        )
}

init()