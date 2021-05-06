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
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1 ]);

friends[2] = "Jay";
console.log(friends);




const city = "Lisbon";
const jonas = ["Jonas", "Khatri", 2037 - 1991, city, "teacher", friends];

console.log(jonas);



// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];


const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);