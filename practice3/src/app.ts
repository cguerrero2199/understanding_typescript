//going to the root of the project and running tsc --init it will compile all ts files in the directory
//can combine with --watch | -w to automatically compile all ts files after a change. 

const button = document.querySelector('button')!;

button.addEventListener('click', () => {
    console.log('Clicked!');
});