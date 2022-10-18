//Author: Cesar Guerrero

class Department {
    // private name: string;
    protected employees: string[] = [];

    // Setting a scope on the constructor for a parameter enables use of access modifers. 
    // I.E no need to define variable in the class and pass the constructor parameter to it. 
    // A property will be auto generated with the same name as the constructor parameter.
    constructor(
        public name: string, 
        private readonly id: string = '1'
    ) {
        //this.name = n;
    }

    describe() {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class Accounting extends Department {
    private lastReport: string;

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addEmployee(name: string): void {
        if (name === 'Max') {
            return;
        }

        this.employees.push(name);
    }

    addReport(text: string) {
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