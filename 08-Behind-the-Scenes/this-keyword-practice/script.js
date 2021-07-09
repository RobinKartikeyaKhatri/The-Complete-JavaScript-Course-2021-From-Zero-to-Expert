"use strict";
console.log(this);   // this - gobal window object

const calcAge = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this);    // this - undefined if strict mode otherwise window global object
}

calcAge(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this);     // this - uses its parent function's scope - global window object
}

calcAgeArrow(1980);


const jonas = {
    name: "Jonas",
    year: 1991,
    calcAge: function() {
        console.log(this);    // this - object(jonas) who is caling the method       
        console.log(2037 - this.year);
    }
}

jonas.calcAge();


const matilda = {
    year: 2017,
}

matilda.calcAge = jonas.calcAge;     // method borrowing process
matilda.calcAge();    // 2037 - 2017 = 20; 20 will be shown as a result


const f = jonas.calcAge;    // copying object's method into a new variable - because function is just a value
f();