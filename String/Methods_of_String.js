let str = "abc def GHI jkl mno abc"

            // toString()
// let str = [1, 2, "abc"];
// let toString = str.toString()                    // convert array into string

// console.log(toString);

            // lenght()
// let lenghtOfString = str.length;                    // It'll be return the lenght of given input.

// console.log(lenghtOfString);                        // 23

            // toUpperCase()
// let upperCase = str.toUpperCase();               // convert into upper case
// let upperCase2 = str.toLocaleUpperCase();       // same wrok

// console.log(upperCase);
// console.log(upperCase2);

            // toLowerCase()                        // convert into lower case
// let lowerCase = str.toLowerCase();
// let lowerCase2 = str.toLocaleLowerCase();

// console.log(lowerCase);                          // abc def ghi jkl mno
// console.log(lowerCase2);                         // abc def ghi jkl mno

            // trim()
// let str = " abc def GHI jkl mno "
// let trim = str.trim();                              // remove white space from start and end of a string.
// let trimStart = str.trimStart();                    // remove white space from start of a string.
// let trimEnd = str.trimEnd();                        // remove white space from end of a string.

// console.log(trim);                                  // 'abc def GHI jkl mno'
// console.log(trimStart);                             // 'abc def ghi jkl mno '
// console.log(trimEnd);                               // ' abc def ghi jkl mno'

            // charAt(index)
// let charAt = str.charAt(2);                            // It tells which word have set at givin index.

// console.log(charAt);                                   // c

            // charCodeAt(index)
// let charCodeAt = str.charCodeAt(2);                       // return the value according Unicode code point of given index.
    // Unicode provides a unique number for every character: no matter what the platform, no matter what the program, no matter what the language

// console.log(charCodeAt);                                  // 99

            // substring(startIndex, endIndex)
// let subString = str.substring(2, 6);                         // It substract the string according to the given index, including startIndex but excluding endIndex.

// console.log(subString);                                      // 'c de'

            // slice(startIndex, endIndex)
// let slice = str.slice(2, 6);                                 // It substract the string according to the given index, including startIndex but excluding endIndex.

// console.log(slice);                                         // 'c de'

            // substr(startIndex, lenght)
// let substr = str.substr(2, 6);

// console.log(substr);                                 // 'c def'           // It subtarct the string according to the given index, including start and end index/lenght.

            // indexOf(searchValue, startIndex)
// let indexOf = str.indexOf('c', 1);                              // It tell the index number of given string. In addition, it also has the ability from which index to start search.

// console.log(indexOf);                                           // 2

            // lastIndexOf(searchValue)
// let lastIndexOf = str.lastIndexOf('c');                           // Return the last index number of giving string.

// console.log(lastIndexOf);                                        // 22

            // includes(searchValue)
// let includes = str.includes('c');                                   // return the boleen expression if value exist or not are as; true and false.

// console.log(includes);                                              // true 

            //  startsWith(searchValue)
// let startWith = str.startsWith('a');                                   // return BE when given value starts the recommanded string.
// let startWith2 = str.startsWith('d');                                   // return BE when given value starts the recommanded string.

// console.log(startWith);                                                 // true
// console.log(startWith2);                                                // false

            // endsWith(searchValue)
// let endsWith = str.endsWith('f');                                     // return BE when given value ends with recomanded string.
// let endsWith2 = str.endsWith('c');

// console.log(endsWith);                                                   // false
// console.log(endsWith2);                                                  //true

            // concat(string1, string2, so om)
// let str2 = "pqr stu vwx yz";
// let concat = str.concat(str2);                                          // It will join two strings.

// console.log(concat);                                                    // abc def GHI jkl mno abcpqr stu vwx yz

            // replace(searchValue, replaceValue)
// let replace = str.replace('a', 'z');                                        // It'll change the first appering value with the given value in recomanded string.

// console.log(replace);                                                       // zbc def GHI jkl mno abc

            // split(startIndex, endIndex)
// let split = str.split(' ');                                                 // It allows you to split a string into an array of substrings based on a specified separator

// console.log(split);                                                         // [ 'abc', 'def', 'GHI', 'jkl', 'mno', 'abc' ]

            // match(regex)
// let match = str.match(/d/g);                                                   //  It is used to match a string against a regular expression and returns an array of the matches found.
    // 'd' is a value which we can search and 'g' is the groups in the output array. 
    // if user only want the value not want the 'groups' information then must be use 'g'.
// console.log(match);                                                            // Output: [ 'd' ]'

            // repeat(count)
// let repeat = str.repeat(2);                                                        // It'll be repeat the given string according to the given number in repeat parameter.

// console.log(repeat);                                                            // abc def GHI jkl mno abcabc def GHI jkl mno abc

            // padStart(targetLenght, padString)
// let str2 = "abc"
// let padStart = str2.padStart(5, 'z');                                              // It'll be add given value in the start of recomanded string.
    // First parameter: work as targeted lenght(in simple words, the output lenght contains according parameter number) 
    // second parameter: add this value in the start of string.
// console.log(padStart);                                                             // 'zzabc'

            // padEnd(targetLenght, padString)
// let str2 = "abc";                                                       // same process like 'padStart()', but in 'padEnd()' value added at the last of recomanded string.
// let padEnd = str2.padEnd(5, 'z');

// console.log(padEnd);                                                   // 'abczz'