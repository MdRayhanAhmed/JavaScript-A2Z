// Problem 12 - Day 4: Create a Rectangle Object

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    const perimeter = 2 * (a + b);
    const area = a * b;
    const recObject = {
        length: a,
        width: b,
        perimeter: perimeter,
        area: area
    }
    return recObject;
}
const a = 4
const b = 5

const rec = new Rectangle(a, b);

console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);

// Problem 13 - Day 4: Count Objects
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    return objects.filter(({ x, y }) => x == y).length;
}


// function getCount(objects) {
//     let count=0;
//     objects.forEach(function(ob){
//         if(ob.x === ob.y){
//             count++;
//         }
//     })
//     return count;
// }

// Problem 14 -  Day 4: Classes
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(arr) {
        this.arr = arr;
    }
    perimeter() {
        return this.arr.reduce((a, b) => a + b)
    }
}

// class Polygon{
//     sum = 0
//     constructor(array){
//         this.arr = array
//     }
//     perimeter(){
//         this.arr.forEach(element =>{
//             this.sum+=element
//         })
//         return this.sum;
//     }
// }


const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());