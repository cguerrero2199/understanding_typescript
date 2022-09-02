function add(n1, n2) {
    return n1 + n2;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
function printResult(num) {
    console.log('Result: ' + num);
}
//Using a variable as a typed function: take any function that uses two parameters that are numbers that will return a number
var combineValues;
//pointer to function, can execute function through variable
combineValues = add;
//Wont work because printResult doesnt take 2 number parameters nor returns a number as a return type
//combineValues = printResult;
console.log(combineValues(4, 5));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
