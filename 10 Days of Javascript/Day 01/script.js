// Problem 03 - Arithmetic Operators


/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    // Write your code here
    let area;
    area = length * width;

    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    // Write your code here
    let perimeter;
    perimeter = 2 * (length + width);

    return perimeter;
}

const length = 3
const width = 4.5
console.log(getArea(length, width))
console.log(getPerimeter(length, width))





// Problem 04 - Functions
const factorial = (n) => {
    if (n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(4))

// Problem 05 -  Let and Const

const letAndConst = () => {
    // Write your code here. Read input using 'readLine()' and
    // print output using 'console.log()'.
    // let r = readLine();
    let r = 2.6
    const PI = Math.PI;
    // Print the area of the circle:
    let area = PI * (r * r);
    console.log(area);

    // Print the perimeter of the circle:
    let perimeter = 2 * PI * r;
    console.log(perimeter)
}
letAndConst()