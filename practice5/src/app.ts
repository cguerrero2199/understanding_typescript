//Author: Cesar Guerrero

class Department {
    // private name: string;
    private employees: string[] = [];

    // Setting a scope on the constructor for a parameter enables use of access modifers. 
    // I.E no need to define variable in the class and pass the constructor parameter to it. 
    // A property will be auto generated with the same name as the constructor parameter.
    constructor(public name: string) {
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

const eng = new Department('Engineering');

eng.addEmployee('Cesar');
eng.addEmployee('Andrew');

eng.describe();

eng.printEmployeeInformation();