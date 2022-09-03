//type alias
type Combinable = number | string;

//Union type
function combine(n1: Combinable, n2: Combinable) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }

    return result;
}

const ages = combine(23, 23);
console.log(ages);

const names = combine('cesar', 'marisa');
console.log(names);