
// Basic Syntax
function f(a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7

// Anonymous Function
// You can optionally exclude the name of the function after the function keyword.

var f = function (a, b) {
    const sum = a + b;
    return sum;
}
console.log(f(3, 4)); // 7

// Immediately Invoked Function Expression (IIFE)
// You can create a function and immediately execute it in Javascript.

const result = (function (a, b) {
    const sum = a + b;
    return sum;
})(3, 4);
console.log(result); // 7

// Functions Within Functions
/* A powerful feature of JavaScript is you can actually create functions
    within other functions and even return them!
*/
function createFunction() {
    function f(a, b) {
        const sum = a + b;
        return sum;
    }
    return f;
}
const f = createFunction();
console.log(f(3, 4)); // 7
//In this example, createFunction() returns a new function. Then that function
// can be used as normal.
