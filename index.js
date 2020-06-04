const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];


console.log("Please build your team")


const askQuestions = () => {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "number",
        name: "id",
        message: "What is your ID?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "list",
        name: "role",
        message: "Which is your Role",
        choices: ["Manager", "Engineer", "Intern"]
    },
    ]).then(({ name, id, email, role }) => {
        // console.log(answers);
        if (role === "Engineer") {
            inquirer.prompt(
                {
                    type: "input",
                    name: "github",
                    message: "What is your engineer's GitHub username?"
                }
            ).then(({ github }) => {
                const test = new Engineer(name, id, email, github);

                console.log(test);

            })
        }
        if (role === "Intern") {
            inquirer.prompt([{

                type: "input",
                name: "name",
                message: "What is your intern's name?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your intern's email?"
            },
            {
                type: "number",
                name: "id",
                message: "What is your intern's id?"
            },

            {
                type: "input",
                name: "school",
                message: "What is your intern's school name?"
            }
            ]).then(({ name, email, id, school }) => {
                const test = new Intern({ name, email, id, school });
                console.log(test);

            })
        }
        if (role === "I don't want to add any more team members") {
            let htmlContent = render(answers);
            console.log(htmlContent);
            writeAnswers(htmlContent);
        }
    })

}


askQuestions();

function writeAnswers(htmlContent) { //this will write the contents into README file.
    fs.writeFile("result.html", htmlContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}