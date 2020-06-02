// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    getName() {

        console.log(`The name of the employee is ${this.name}`);
    }
    getId() {
        //this.id;
        console.log(`The id of the employee is ${this.id}`);
    }
    getEmail() {
        //this.email;
        console.log(`The email of the employee is ${this.email}`);
    }
    getRole() {
        console.log("Role is Employee");
    }

}

// const employee = new Employee("Priyanka", "100", "priyankasingh30@gmail.com");
// employee.getName();
// employee.getId();
// employee.getEmail();
// employee.getRole();

module.exports = Employee;