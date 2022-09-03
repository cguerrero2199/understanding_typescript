//Author: Cesar Guerrero

const userName = 'Cesar';
let age = 23

/*const add = (a: number, b: number) => {
    return a + b;
};*/

const add = (a: number, b: number) => a + b;

const button = document.querySelector('button');
if (button) {
    //button.addEventListener('click', event => console.log(event));
    button.addEventListener('click', (event) => {
        console.log(event);
    });
}

console.log(add(1, 2));