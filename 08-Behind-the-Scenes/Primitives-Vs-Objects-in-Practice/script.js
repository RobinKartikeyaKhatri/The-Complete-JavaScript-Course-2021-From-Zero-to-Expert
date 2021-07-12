"use strict";

// Primitive Types
let lastName = "Williams";
let oldLastName = lastName;     // Williams
lastName = "Davis";

console.log(lastName, oldLastName);     // Davis Williams

// Reference Types
const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27 
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before marriage:", jessica);     // {firstName: "Jessica", lastName: "Davis", age: 27}
console.log("After marriage:", marriedJessica);     // {firstName: "Jessica", lastName: "Davis", age: 27}

// marriedJessica = {};     This will not work




// Coying Objects
const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"]
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
//Before marriage: {firstName: "Jessica", lastName: "Williams", age: 27}

console.log("After marriage:", jessicaCopy);
//After marriage: {firstName: "Jessica", lastName: "Davis", age: 27}