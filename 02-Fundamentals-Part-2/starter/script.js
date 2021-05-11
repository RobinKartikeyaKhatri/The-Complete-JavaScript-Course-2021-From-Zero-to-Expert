'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("I can drive : D");

// // const interface = "Audio";
// // const private = 1234;


// function logger() {
//     console.log(`My name is Robin`);
// }

// logger();
// logger();
// logger();


// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// Function Declaration
// function calcAge1(birthYear) {
//     return 2021 - birthYear;
// }

// const age1 = calcAge1(1985);
// console.log(age1);


// // Function Expression aka Anonymous Function
// const calcAge2 = function(birthYear) {
//     return 2021 - birthYear;
// }

// const age2 = calcAge2(1983);
// console.log(age2);


// Arrow Functions - With Zero Parameters
// const sayHi = () => {
//     console.log(`Hi everyone!`);
// }

// sayHi();

// // Arrow Function - With 1 Parameter
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age3);

// // Arrow Function - Without Parenthesis
// const greet = name => `Hello ${name}`;
// console.log(greet('Robin'));


// // Arrow Function - With 2 Parameters
// const addNumbers = (num1, num2) => `The sum of two numbers are: ${num1 + num2}`;
// const result = addNumbers(15, 5);
// console.log(result);


// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));


// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }


//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));



// Arrays
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1 ]);

// friends[2] = "Jay";
// console.log(friends);




// const city = "Lisbon";
// const jonas = ["Jonas", "Khatri", 2037 - 1991, city, "teacher", friends];

// console.log(jonas);



// Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];


// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);



// Array Methods
// const friends = ["Michael", "Steven", "Peter"];

// Add elements to the end
// const newLength = friends.push("Jay");

// console.log(friends);
// console.log(newLength);

// Add elements to beginning
// friends.unshift("John");
// console.log(friends);

// Remove elements to end
// const removedElement = friends.pop();
// console.log(friends);
// console.log(removedElement);

// Remove element from beginning
// const firstRemove = friends.shift();
// console.log(firstRemove);
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// console.log(friends.includes("Peter"));


// Objects

// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     age: 2037 - 1991,
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"]
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong request! Choose between firstName, lastName, age, job, and friends")
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



// Object Methods
// const jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     birthYear: 1991,
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriverseLicense: true,
//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }

//     // calAge: function() {
//     //     // console.log(this);
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     }
// };

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));

// console.log(jonas.calAge());
// console.log(jonas["calAge"]());

// console.log(jonas);
// console.log(jonas.calcAge());
// console.log(jonas);


// Challenge
// const robin = {
//     firstName: "Robin",
//     middleName: "Kartikeya",
//     lastName: "Khatri",
//     friends: ["Monto", "Amzad", "Bablu", "Kallu"],
//     birthYear: 1985,
//     calculateAge: function() {
//         this.age = 2021 - this.birthYear;
//         return this.age;
//     },
//     hasDriverseLicense: true,
//     hasMarried: false,
//     job: "JavaScript Developer",
//     checkDrivingLicenseStatus: function() {
//         if (this.hasDriverseLicense) {
//             return `a`;
//         } else {
//             return `no`;
//         }
//     },
//     getSummary: function() {
//         return `${this.firstName} ${this.middleName} ${this.lastName} is a ${this.calculateAge()}-year old ${this.job}, and he has ${this.checkDrivingLicenseStatus()} driver's license`;
//     }
// }

// console.log(robin.getSummary());

// console.log(`${robin.firstName} ${robin.middleName} ${robin.lastName} is a ${robin.calculateAge()}-year old ${robin.job}, and he has ${robin.checkDrivingLicenseStatus()} driver's license`);


// For Loop
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍`);
// }


// Looping Arrays, Breaking and Continuing
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Peter"],
    true
];

const types = [];

for(let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);


// continue and break
console.log("----- ONLY STRINGS -----");
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== "string") continue;
    console.log(jonas[i], typeof jonas[i]);
}

console.log("----- BREAK WITH NUMBERS -----");
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === "number") break;
    console.log(jonas[i], typeof jonas[i]);
}