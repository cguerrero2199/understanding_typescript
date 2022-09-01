//TYPES 
// any keyword can be used to any type to be assigned

//ts version of speaclized object type
//const person: {
//    name: string;
//    age: number;
//} = {

const person = {
    name: "Cesar",
    age: 23,
    hobbies: ["Programming", "Reading"]
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}