let name = {
    firstName: "Rayhan",
    lastName: "Ahmed",

}
let printFullName = function () {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
}
printFullName.call(name, "Cumilla", "Daudkandi");

let name2 = {
    firstName: "Shohag",
    lastName: "Ahmed",
}

printFullName.apply(name2, ["Dhaka", "Dhanmondi"])
let ans = printFullName.bind(name2, "Dhaka", "Dhanmondi");
ans();
// Function.prototype.mybind = 
