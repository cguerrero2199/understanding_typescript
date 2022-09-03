function add(n1: number, n2: number): number {
    return n1 + n2;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

//Using a variable as a typed function: take any function that uses two parameters that are numbers that will return a number
let combineValues: (a: number, b: number) => number;

//pointer to function, can execute function through variable
combineValues = add;

//Wont work because printResult doesnt take 2 number parameters nor returns a number as a return type
//combineValues = printResult;

console.log(combineValues(4, 5))

addAndHandle(10, 20, (result) => {
    console.log(result);
});