//TYPES 
// any keyword can be used to any type to be assigned

//ts version of speaclized object type
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; //tuples with types in each position
} = {
    name: 'Cesar',
    age: 23,
    hobbies: ['Programming', 'Reading'],
    role: [1, 'Developer'] 
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}