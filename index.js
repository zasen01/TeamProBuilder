const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
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
                console.log(answers);
                mainMenu()
            })
        }
        if(answer.type === "Engineer"){
            inquirer.prompt(engineerQuestions).then(answers => {
                console.log(answers);
                mainMenu()
            })
        }
        if(answer.type === "Intern"){
            inquirer.prompt(internQuestions).then(answers => {
                console.log(answers);
                mainMenu()
            })
        }
        if(answer.type ==="Done"){
            process.exit()
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
        name: "OfficeNumber",
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