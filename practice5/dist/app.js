"use strict";
class Department {
    constructor(name, id = '1') {
        this.name = name;
        this.id = id;
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
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
class Accounting extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const eng = new ITDepartment('Engineering', ['Ceeze']);
eng.addEmployee('Cesar');
eng.addEmployee('Andrew');
eng.describe();
eng.printEmployeeInformation();
console.log(eng);
const acc = new Accounting('d2', []);
acc.addReport('Error something went wrong');
acc.addEmployee('Max');
acc.addEmployee('Cesar!');
acc.printReports();
acc.printEmployeeInformation();
