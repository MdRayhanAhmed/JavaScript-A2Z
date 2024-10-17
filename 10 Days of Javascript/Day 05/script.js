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


/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const A = expressions[0];
    const P = expressions[1];
    const s1 = (P + (Math.sqrt(P * P - 16 * A))) / 4;
    const s2 = (P - (Math.sqrt(P * P - 16 * A))) / 4;
    const total = [s1, s2].sort((a, b) => {
        return a - b;
    })
    return total;
}




// Problem 17 - Day 5: Arrow Functions


/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    //return nums.map (s => s%2!=0? s*3: s*2)
    return nums.map((value) => value % 2 != 0 ? value * 3 : value * 2)
}


