const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./src/generatehtml");
const path = require("path");
const fs = require("fs");

const team = [];

const mainMenu = () => {
    inquirer.prompt ({
        type:"list",
        name:"type",
        message:"Select new employee type",
        choices:["Manager","Engineer","Intern","Done"]
    }).then(answer => {
        if(answer.type === "Manager"){
            inquirer.prompt(managerQuestion).then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
                team.push(manager)
                mainMenu()
            })
        }
        if(answer.type === "Engineer"){
            inquirer.prompt(engineerQuestions).then(answers => {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub)
                team.push(engineer)
                mainMenu()
            })
        }
        if(answer.type === "Intern"){
            inquirer.prompt(internQuestions).then(answers => {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                team.push(intern)
                mainMenu()
            })
        }
        if(answer.type ==="Done"){
            fs.writeFileSync(path.join(__dirname,"/dist/","index.html"),generateHtml(team))
        }
    })
}



const managerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Enter Managers Name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Managers ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Managers Email:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter Managers Office Number:"
    },
]
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Engineers Name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Engineers ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Engineers Email:"
    },
    {
        type: "input",
        name: "gitHub",
        message: "Enter Engineers GitHub Username:"
    },
]
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter Interns Name:"
    },
    {
        type: "input",
        name: "id",
        message: "Enter Interns ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Enter Interns Email:"
    },
    {
        type: "input",
        name: "school",
        message: "Enter Interns School:"
    },
]

mainMenu();