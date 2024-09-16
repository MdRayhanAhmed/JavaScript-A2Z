// Let‘s Practice
// Qs. Create a function using the “function” keyword that
//  takes a String as an argument &
//  returns the number of vowels in the string

function vowels(str) {
    let count = 0;
    for (const char of str) {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    return count;
}
let result = vowels("awiou");
console.log(result)

//Qs. Create an arrow function to perform the same task

const countvowels = (str) => {
    let count = 0;
    for (const char of str) {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            count++;
        }
    }
    return count;

}
let res = countvowels("iou");
console.log(res)

//-------------------------------------------
// Hackerrank Problem-Basic

'use strict'
function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(10);
