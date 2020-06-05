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

const validateName = (name) => {
    if (name == '' || typeof name === "number") {
        return 'Please enter name';
    }
    return true;
};
const validateId = (id) => {
    if (id == '' || typeof id === "number") {
        return 'Please enter id';
    }
    return true;
};
const validateEmail = (email) => {
    if (email == '') {
        return 'Please enter email';
    }
    return true;
};




const askQuestions = () => {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: validateName
    },
    {
        type: "number",
        name: "id",
        message: "What is your ID?",
        validate: validateId
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: validateEmail
    },
    {
        type: "list",
        name: "role",
        message: "What is your Role",
        choices: ["Manager", "Engineer", "Intern"]
    },
    ]).then(({ name, id, email, role }) => {
        // console.log(answers);
        if (role === "Manager") {
            inquirer.prompt(
                {
                    type: "number",
                    name: "officeNumber",
                    message: "What is your office number?"
                }
            ).then(({ officeNumber }) => {
                const manager = new Manager(name, id, email, officeNumber);

                console.log(manager);
                teamMembers.push(manager);
                addMoreTeamMembers();
            })
        }
        if (role === "Engineer") {
            inquirer.prompt(
                {
                    type: "input",
                    name: "github",
                    message: "What is your GitHub username?"
                }
            ).then(({ github }) => {
                const engineer = new Engineer(name, id, email, github);

                console.log(engineer);
                teamMembers.push(engineer);
                console.log(teamMembers);
                addMoreTeamMembers();
            })
        }
        if (role === "Intern") {
            inquirer.prompt(
                {
                    type: "input",
                    name: "school",
                    message: "What is your school name?"
                }
            ).then(({ school }) => {
                const intern = new Intern(name, email, id, school);
                console.log(intern);
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
            console.log(teamMembers);
            let employeeInfo = render(teamMembers);
            writeAnswers(employeeInfo)
        }

    }).catch(err => {
        console.log("Error adding other members", err)
        throw err
    })
}
askQuestions();

function writeAnswers(htmlContent) { //this will write the contents into README file.
    fs.writeFile(outputPath, htmlContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

}