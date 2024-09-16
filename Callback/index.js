// // 1. Main function
// const mainFunction = (callback) => {
//     setTimeout(() => {
//         callback([2, 3, 4]);
//     }, 2000)
// }

// // Add function
// const add = (array) => {
//     let sum = 0;
//     for (let i of array) {
//         sum += i;
//     }
//     console.log(sum);
// }

// // Calling main function
// mainFunction(add);


// // 2.
// function mainFunction(callback) {
//     console.log("Performing operation...");
//     // Use setTimeout to simulate an asynchronous operation
//     setTimeout(function () {
//         callback("Operation complete");
//     }, 3000);
// }

// // Define the callback function
// function callbackFunction(result) {
//     console.log("Result: " + result);
// }

// // Call the main function with the callback function
// mainFunction(callbackFunction);


// //3.
// let mainFunction = (callback) => {
//     console.log("Copy Performing operation...");
//     setTimeout(function () {
//         callback("Copy Operation Complete");
//     }, 5000);
// }
// let callbackFunction = (result) => {
//     console.log("Result: " + result);
// }
// mainFunction(callbackFunction);


// 4. Callback with array.forEach
// Define an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Define the main function
function mainFunction(callback) {
    console.log("Performing operation...");
    // Use Array.forEach to loop through the array of numbers
    numbers.forEach(callback);
}
// Define the callback function
function callbackFunction(number) {
    console.log("Result: " + number);
}
// Call the main function with the callback function
mainFunction(callbackFunction);



