// Problem 09 - Conditional Statements: If-Else



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

console.log(getSecondLargest(nums))


// Problem 07 - Conditional Statements: Switch

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case 'a' || 'e' || 'i' || 'o' || 'u':
            letter = 'A';
            break;
        case 'b' || 'c' || 'd' || 'f' || 'g':
            letter = 'B';
            break;
        case 'h' || 'j' || 'k' || 'l' || 'm':
            letter = 'C';
            break;
        default:
            letter = 'D';
    }

    return letter;
}

console.log(getLetter('adfgt'))

// Problem 08 -  Loops

function vowelsAndConsonants(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            console.log(s[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== 'a' && s[i] !== 'e' && s[i] !== 'i' && s[i] !== 'o' && s[i] !== 'u') {
            console.log(s[i]);
        }
    }
}

vowelsAndConsonants('javascriptloops')