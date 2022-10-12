"use strict";
const userName = 'Cesar';
let myAge = 23;
const add = (...numbers) => {
    let result = 0;
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => {
        console.log(event);
    });
}
console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: 'Cesar',
    age: 23
};
const copiedPerson = Object.assign(Object.assign({}, person), { hobbies: activeHobbies });
console.log(copiedPerson);
const [h1, h2, ...remainingHobbies] = activeHobbies;
console.log(h1);
console.log(h2);
console.log(remainingHobbies);
const { name: personName, age } = person;
