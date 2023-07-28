// Create an object. 

// let person = {
//     name: "Sikander",
//     age: 24,
//     edu: "BS CS",
//     address: "Dijkot",
//     hobbies: ["Martial Art", "Coding", "Flirting"] 
// };

// console.log(person);

// // get a key:
// let name = person.name;
// console.log(name);

// // get an array key:
// person.hobbies[0] = "Travling"
// console.log(person);

// // update a key:
// person.address = "Faisalabad";
// console.log(person);

// // remove a key:
// delete person.address;
// console.log(person);

// // add a key:
// person.semester = 8;
// console.log(person);


                                    // METHODS OF OBJECTS.

let person = {
    name: "Sikander",
    age: 24,
    edu: "BS CS",
    address: "Dijkot",
    hobbies: ["Martial Art", "Coding", "Flirting"],
//     display: function() {
//         console.log(`${this.name} is a bad boy.`);
//     }
};
// let person1 = {
//     name: "Sikander",
//     age: 24,
//     edu: "BS CS",
//     address: "FSD",
//     hobbies: ["Martial Art", "Coding", "Flirting"] 
// };

        // Object.keys()                 It'll be use to get all keys of an object.
// let keys = Object.keys(person);
// console.log(keys);

        // Object.values()               It'll be use to get all values of an object.
// let values = Object.values(person);
// console.log(values);

        //  Object.entries()             Covert the key/value pairs in an array individually.
// let entries = Object.entries(person);   
// console.log(entries);

// console.log(entries[1]);


        // Object.assign();                It;ll be use to merge values.
// let assign = Object.assign(person, person1);
// console.log(assign);

        // Object.create()                 It'll beuse for create values after declaration of an object.
// let msg = {
//     displayInfo: function() {
//         console.log(`${this.name} says: Hi, I'm Yours.`);
//     }
// };

// let create = Object.create(msg, {
//     name: { value: "Amina" }
// });

// create.displayInfo();

        // Object.freeze()                      once an object is frozen, its properties cannot be added, modified, or deleted. 
// Object.freeze(person);

        // Object.seal()                        This means that after sealing an object, you can modify the values of its existing properties, but you cannot add new properties, delete existing properties, or change the configurability (i.e., descriptors) of existing properties.
// Object.seal(person);

        // Object.hasOwnProperty()              It used to check, either the property includes in object or not.
// console.log(person.hasOwnProperty("age"));

        // Object.is()                          compares two values to determine if they are the same value.