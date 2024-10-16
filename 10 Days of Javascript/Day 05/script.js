// Problem 15 - Day 05: Inheritance

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
    return this.w * this.h;
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */

class Square extends Rectangle {
    constructor(q) {
        super(q, q);
    }
}




// Problem 16 - Day 5: Template Literals

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

// Problem 17 - Day 5: Arrow Functions

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