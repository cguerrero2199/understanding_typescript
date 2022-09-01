//Union type
function combine(n1, n2) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var ages = combine(23, 23);
console.log(ages);
var names = combine('cesar', 'marisa');
console.log(names);
