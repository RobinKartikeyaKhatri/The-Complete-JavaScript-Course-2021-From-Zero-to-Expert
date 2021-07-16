"use strict";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function({starter, main, time, address}) {
    console.log(`Order received ${this.starterMenu[2]} and ${this.mainMenu[2]} will be delivered to ${address} at ${time}`);
  }
};

restaurant.orderDelivery({
  time: '22:30',
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2
});

// Object Destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Rename object properties while destructuring
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({a, b} = obj);
console.log(a, b);

// Nested Objects

// const {fri: {open, close}} = openingHours;
// console.log(open, close);


const {fri: {open: o, close: c}} = openingHours;
console.log(o, c);