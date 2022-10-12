//Author: Cesar Guerrero

const userName = 'Cesar'; //non mutable
let myAge = 23 //mutable 

/*const add = (a: number, b: number) => {
    return a + b;
};*/

// const add = (a: number, b: number = 1) => a + b;

//REST Parameters to take in x number of paramters of type number 
const add = (...numbers: number[]) => {
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue
    }, 0);
}

const button = document.querySelector('button');
if (button) {
    //button.addEventListener('click', event => console.log(event));
    button.addEventListener('click', (event) => {
        console.log(event);
    });
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

/** SPREAD OPERATOR */
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
    name: 'Cesar',
    age: 23
}

const copiedPerson = {
    ...person,
    hobbies: activeHobbies
}

console.log(copiedPerson);

/** Array & Object Destructing */
const [h1, h2, ...remainingHobbies] = activeHobbies;
console.log(h1);
console.log(h2);
console.log(remainingHobbies);

//variables have to be initially property names, but can overridden with colon: to change variable name
const {name:personName, age} = person