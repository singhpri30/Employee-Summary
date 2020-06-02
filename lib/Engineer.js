// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");
console.log(Employee);


class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;

    }

    getGithub() {
        console.log(`The GitHub user anme is ${this.github}`);

    }

    getRole() {
        console.log("Role is Engineer");
    }

}

const engineer = new Engineer("Vishvas", 120, "vish07@gmail.com", 1234567);
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();