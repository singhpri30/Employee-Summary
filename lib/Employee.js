// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";

    }
    getName() {
        return this.name;
        //console.log(`The name of the employee is ${this.name}`);
    }
    getId() {
        return this.id;
        //console.log(`The id of the employee is ${this.id}`);
    }
    getEmail() {
        return this.email;
        //console.log(`The email of the employee is ${this.email}`);
    }
    getRole() {

        return this.role;

        //console.log(`Role is ${this.role}`);
    }

}

const employee = new Employee();
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee;