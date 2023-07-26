// Create an object. 

let person = {
    name: "Sikander",
    age: 24,
    edu: "BS CS",
    address: "Dijkot",
    hobbies: ["Martial Art", "Coding", "Flirting"] 
};

console.log(person);

// get a key:
let name = person.name;
console.log(name);

// get an array key:
person.hobbies[0] = "Travling"
console.log(person);

// update a key:
person.address = "Faisalabad";
console.log(person);

// remove a key:
delete person.address;
console.log(person);

// add a key:
person.semester = 8;
console.log(person);