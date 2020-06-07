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
        message: "What is your name?",
        validate: name => {
            if (name !== '') {
                return true;
            }
            return "Please enter name"
        }
    },
    {
        type: "input",
        name: "id",
        message: "What is your ID?",
        validate: id => {
            const pass = id.match(/^[0-9]\d*$/);
            if (pass) {
                return true;
            }
            return "Please enter an valid ID"
        }
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: email => {
            const pass = email.match(/\S+@\S+\.\S+/);
            if (pass) {
                return true;
            }
            return "Please enter an valid email address"

        }
    },
    {
        type: "list",
        name: "role",
        message: "What is your Role",
        choices: ["Manager", "Engineer", "Intern"]
    },
    ]).then(({ name, id, email, role }) => {
        if (role === "Manager") {
            inquirer.prompt(
                {
                    type: "input",
                    name: "officeNumber",
                    message: "What is your office number?",
                    validate: id => {
                        const pass = id.match(/^[0-9]\d*$/);
                        if (pass) {
                            return true;
                        }
                        return "Please enter an valid office number"
                    }
                }
            ).then(({ officeNumber }) => {
                const manager = new Manager(name, id, email, officeNumber);
                teamMembers.push(manager);
                addMoreTeamMembers();
            })
        }
        if (role === "Engineer") {
            inquirer.prompt(
                {
                    type: "input",
                    name: "github",
                    message: "What is your GitHub username?",
                    validate: name => {
                        if (name !== '') {
                            return true;
                        }
                        return "Please enter engineer's GitHub username"
                    }
                }
            ).then(({ github }) => {
                const engineer = new Engineer(name, id, email, github);
                teamMembers.push(engineer);
                addMoreTeamMembers();
            })
        }
        if (role === "Intern") {
            inquirer.prompt(
                {
                    type: "input",
                    name: "school",
                    message: "What is your school name?",
                    validate: name => {
                        if (name !== '') {
                            return true;
                        }
                        return "Please enter intern's school name"
                    }
                }
            ).then(({ school }) => {
                const intern = new Intern(name, email, id, school);
                teamMembers.push(intern);
                addMoreTeamMembers();
            })
        }

    })

}


const addMoreTeamMembers = () => {
    inquirer.prompt({
        type: "confirm",
        name: "moreTeamMembers",
        message: "Would you like to add more team members?",
    }).then(({ moreTeamMembers }) => {
        if (moreTeamMembers) {
            askQuestions();
        }
        else {
            let employeeInfo = render(teamMembers);
            writeAnswers(employeeInfo)
        }

    }).catch(err => {
        console.log("Error adding other members", err)
        throw err
    })
}
askQuestions();

function writeAnswers(htmlContent) { //this will write the contents team.html file
    fs.writeFile(outputPath, htmlContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}