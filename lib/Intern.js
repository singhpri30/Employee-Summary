// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("../lib/Employee.js");
console.log(Employee);


class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = "Intern";

    }

    getSchool() {
        console.log(`The School name is ${this.school}`);

    }

    getRole() {
        console.log(`Role is ${this.role}`);
    }

}

const intern = new Intern("Vishvas", 120, "vish07@gmail.com", 1234567);
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();
