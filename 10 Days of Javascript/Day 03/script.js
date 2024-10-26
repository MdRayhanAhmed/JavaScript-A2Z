// Problem 09 - Arrays

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let first, second;
    first = second = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first;
            first = nums[i];
        }
        else if (nums[i] > second && nums[i] !== first) {
            second = nums[i];
        }
    }
    return second;
}
let nums = [2, 3, 6, 6, 5]
console.log(getSecondLargest(nums))


// Problem 10 - Try, Catch, and finally

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let a = s
    try {
        let arr = s.split('').reverse()
        a = arr.join('')
    }
    catch (err) {
        console.log(err.message)
    }
    finally {
        console.log(a)
    }
}

reverseString(1234)

// Problem 11 -  Throw

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a <= 0) {
        throw new Error(a == 0 ? "Zero Error" : "Negative Error");
    }
    return "YES";
}

console.log(isPositive(3))

// function isPositive(a) {
//     if(a > 0){
//         return "YES";
//     }
//     else if(a === 0){
//         throw new Error("Zero Error");
//     }
//     else {
//         throw new Error("Negative Error");
//     }
// }