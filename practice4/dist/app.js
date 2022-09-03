"use strict";
const userName = 'Cesar';
let age = 23;
const add = (a, b) => a + b;
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', (event) => {
        console.log(event);
    });
}
console.log(add(1, 2));
