// Write a js program to print all unique elements in the array.

// SOLUTION:

let array = [1, 4, 5, 1, 2, 4, 3];
let unique = [];

for (let index = 0; index < array.length; index++) {
    if (array[0] === array[index]) {
        unique.push(array[index]);
    }
}

console.log(unique);