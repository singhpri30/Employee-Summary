// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");
// console.log(Employee);


class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";

    }

    getGithubUserName() {
        return this.github;
        //console.log(`The GitHub user name is ${this.github}`);

    }

    getRole() {
        return this.role;
        //console.log("Role is Engineer");
    }

}

const engineer = new Engineer();
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithubUserName();
engineer.getRole();