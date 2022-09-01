//TYPES 
// any keyword can be used to any type to be assigned
//ts version of speaclized object type
//const person: {
//    name: string;
//    age: number;
//} = {
var person = {
    name: "Cesar",
    age: 23,
    hobbies: ["Programming", "Reading"]
};
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
