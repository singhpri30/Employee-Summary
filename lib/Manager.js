// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee.js");
console.log(Employee);


class Manager extends Employee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    }

    getRole() {
        console.log("Role is Manager");
    }

}

const manager = new Manager("Vishvas", 120, "vish07@gmail.com", 1234567);
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();