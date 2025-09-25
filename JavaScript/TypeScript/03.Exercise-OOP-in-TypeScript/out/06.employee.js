"use strict";
class Employee {
    name;
    position;
    salary;
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    getDetails() {
        return `Name: ${this.name}, Position: ${this.position} Salary: $${this.salary}`;
    }
    showSalary() {
        return `Salary: $${this.salary}`;
    }
}
const emp = new Employee("Alice", "Manager", 5000);
console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name);
// console.log(emp.salary)
// console.log(emp.position)
//# sourceMappingURL=06.employee.js.map