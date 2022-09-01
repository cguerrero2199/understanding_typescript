//TYPES 
// any keyword can be used to any type to be assigned

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

//ts version of speaclized object type
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role
} = {
    name: 'Cesar',
    age: 23,
    hobbies: ['Programming', 'Reading'],
    role: Role.ADMIN
};

console.log(person);

for (const hobby of person.hobbies) {
    //can use the .toUpperCase() and shows up in ide because ts can ensure it is a string. 
    console.log(hobby.toUpperCase());
}