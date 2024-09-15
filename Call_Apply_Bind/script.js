let name = {
    firstName: "Rayhan",
    lastName: "Ahmed",

}
const printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}
printFullName.call(name, "Cumilla", "Daudkandi");

let name2 = {
    firstName: "Shohag",
    lastName: "Ahmed",
}

// function  borrowing
//call() method
// printFullName.call(name2, "Dhaka", "Dhanmondi");
printFullName.apply(name2, ["Dhaka", "Dhanmondi"])
let ans = printFullName.bind(name2, "Dhaka", "Dhanmondi");
ans();


const person = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}
console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

console.log(Math.max.apply(null, [1, 2, 3]))
//same as
console.log(Math.max.apply(Math, [5, 2, 3]))
//same as
console.log(Math.max.apply(" ", [1, 2, 3]))
//same as 
console.log(Math.max.apply(0, [1, 2, 3]))