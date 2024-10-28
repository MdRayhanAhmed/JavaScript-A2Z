// Problem 15 - Day 05: Inheritance
class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }
}
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

const rec = new Rectangle(3, 4);
const sqr = new Square(3);

console.log(rec.area());
console.log(sqr.area());


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


let s1 = 10
let s2 = 14
// [s1, s2] = [s1, s2].sort();
// [s1, s2] = [s1, s2].sort((a, b) => a - b); // Sorts numerically


function sides(literals, ...expressions) {
    const A = expressions[0];
    const P = expressions[1];
    const si1 = (P + (Math.sqrt(P * P - 16 * A))) / 4;
    const si2 = (P - (Math.sqrt(P * P - 16 * A))) / 4;
    const total = [si1, si2].sort((a, b) => {
        return a - b;
    })
    return total;
}

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);



// function sides(literals, ...expressions) {
//     let arr = []
//     let [a,b] = expressions
//     let s1 = (b-Math.sqrt(b**2-16 * a))/4
//     let s2 = (b+Math.sqrt(b**2-16 * a))/4
//     arr.push(s1)
//     arr.push(s2)
//     return arr.sort((a,b) => a-b)
// }


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
console.log(modifyArray([1, 2, 3, 4, 5]))
console.log(modifyArray([1, 2, 3, 4, 5]).toString().split(',').join(' '));

// function modifyArray(nums) {
//     let marr=[];
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]%2 == 0){
//             nums[i]=nums[i]*2;
//         }
//         else{
//             nums[i]=nums[i]*3;
//         }
//     }
//     return nums;

// }
