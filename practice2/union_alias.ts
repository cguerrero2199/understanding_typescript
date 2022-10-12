//type alias
type Combinable = number | string;

//Union type
function combine2(n1: Combinable, n2: Combinable) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }

    return result;
}

const ages = combine2(23, 23);
console.log(ages);

const names = combine2('cesar', 'marisa');
console.log(names);