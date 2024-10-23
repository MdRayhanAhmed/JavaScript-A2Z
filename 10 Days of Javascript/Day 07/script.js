// Problem 20 - Day 7:  Regular Expressions I

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    let re = /^([aeiou]).*\1$/;

    /*
     * Do not remove the return statement
     */
    return re;
}

//Problem 21 - Day 7: Regular Expressions II
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */

    const re = /^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z ]+$/;
    /*
     * Do not remove the return statement
     */
    return re;
}

//Problem 23 - Day 7: Regular Expressions III
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    const re = /([0-9])+/g;

    /*
     * Do not remove the return statement
     */
    return re;
}