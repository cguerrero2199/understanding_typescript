function add(n1: number, n2: number, showResult: boolean) {
    if (showResult) {
        console.log(n1+n2);
    } else {
        return n1 + n2;
    }
}

//this throws error
//const x1 = '5';

//explicit type definition 
const x1: number = 5;

//implicit type definition, takes type from initial assignment 
const x2 = 7;

const printResult  = true;

const result = add(x1, x2, printResult);