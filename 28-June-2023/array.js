// Here, we learn how to make array and methods of array.

// let arr = [1, "Ali", true];
// console.log(arr);

// over-writting the array.
// arr[0] = "RG";
// arr[1] = 6;
// console.log(arr);

// console.log(arr[2]);     To get specific value.

                                //PRACTICE SET.
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.

// let shoppingList = ["Milk", "Bread", "Apples"];
// console.log(shoppingList.length);
// shoppingList[1] = "Bananas";
// console.log(shoppingList);

//\\//\\//\\///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\//\\//\\//\\//\\//\\

// Now we discuss and practice of methods.
// let arr = [1, 2, 3, 4, 5];
                    
// arr.push("Push");    // Add value at the end of array.
// console.log(arr);

// arr.unshift(0);          // Add value from the start of array.
// console.log(arr);

// arr.splice(3, 0, "Add at", "Specific place");  // Add the value at specific place.
// console.log(arr);

// arr.splice(3, 2, "delete", "values");
// console.log(arr);

// arr.pop();                     // Remove value at the end of Array.
// console.log(arr);

// arr.shift();                     // Remove value from the start of array.
// console.log(arr);

// arr.splice(1, 3);                    // Delete value from the specific place.
// console.log(arr);

// let arr1 = arr.find(item => item > 2);  // Find value on the given index.
// console.log(arr1);

// let arr1 = arr.indexOf(3);               // In this, we give the value and "indexOf()" answer me the index number of array. 
// console.log(arr1);

// let arr1 = arr.lastIndexOf(5);       // output the last index number of the array.
// console.log(arr1);

// let arr1 = [9, 6, 8, 10, 7, 11];
// let array = arr1.reverse();
// console.log(array);

// let array1 = arr1.sort((a, b) => a - b);     // Sorting numeric values in accending order.
// console.log(array1);

// let arr3 = arr.concat(arr1);     // Join the two arrays.
// console.log(arr3);

// arr3.sort((a, b) => b - a);     // Sorting numeric values in deccending order.
// console.log(arr3);

                                //PRACTICE SET.
// 1. Create an empty array to use as a shopping list.
// 2. Add Milk , Bread , and Apples to your list.
// 3. Update " Bread " with Bananas and Eggs .
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk .
// 7. After Bananas , add Carrots and Lettuce .
// 8. Create a new list containing Juice and Pop .
// 9. Combine both lists, adding the new list twice to the end of the first list.
// 10. Get the last index value of Pop and output it to the console.

// let shoppingList = [];
// shoppingList.splice(0, 0, "Milk", "Bread", "Apples");   // output: [ 'Milk', 'Bread', 'Apples' ].
// // console.log(shoppingList);

// shoppingList.splice(1, 1, "Bananas", "Eggs");           // output: [ 'Milk', 'Bananas', 'Eggs', 'Apples' ].
// // console.log(shoppingList);

// shoppingList.pop();                                     // output: [ 'Milk', 'Bananas', 'Eggs' ].
// // console.log(shoppingList);

// shoppingList.sort();                                    // output: [ 'Bananas', 'Eggs', 'Milk' ].
// // console.log(shoppingList);

// let sL = shoppingList.findIndex(item => item === "Milk");
// // console.log(sL);

// shoppingList.splice(1, 0, "Carrots", "Lettuce");      // output: [ 'Bananas', 'Carrots', 'Lettuce', 'Eggs', 'Milk' ].
// // console.log(shoppingList);

// let shoppingList2 = ["Juice", "Pop"];
// let list = shoppingList.concat(shoppingList2);
// // console.log(list);

// let finalList = shoppingList.concat(list).concat(list);
// // console.log(finalList);

// let index = finalList.lastIndexOf("Pop");
// console.log(index);

//\\//\\//\\///\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\//\\//\\//\\//\\//\\

                                // Multidimensional Arrays
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);

// let arr2 = [6, 7, 8, 9, 10];
// console.log(arr2);

// let arr3 = [11, 12, 13, 14, 15];
// console.log(arr3);

// let groupOfArrays = [arr1, arr2, arr3];
// console.log(groupOfArrays);

// let value = groupOfArrays[1][1];
// console.log(value);

// let groupOfGroupsOfArrays = [groupOfArrays, groupOfArrays, groupOfArrays];
// console.log(groupOfGroupsOfArrays);

// let value = groupOfGroupsOfArrays[1][1];
// let value1 = groupOfGroupsOfArrays[1][2][3];
// // console.log(value);
// console.log(value1);

                                        // PRACTICE SET
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.

// let arr = [1, 2, 3];
// let newArray = [arr, arr, arr];
// console.log(newArray[1][1]);          // output: 2