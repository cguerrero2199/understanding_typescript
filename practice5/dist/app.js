"use strict";
class Department {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const eng = new Department('Engineering');
eng.addEmployee('Cesar');
eng.addEmployee('Andrew');
eng.describe();
eng.printEmployeeInformation();
