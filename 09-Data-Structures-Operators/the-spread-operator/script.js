"use strict";

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 7, 8, 9]
console.log(...newArr); // spreaded array elements: 1, 2, 7, 8, 9

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

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
};

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // ["Pizza", "Pasta", "Risotto", "Gnocci"]
console.log(...newMenu); // Spreaded array elements: "Pizza", "Pasta", "Risotto", "Gnocci"

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // ["Pizza", "Pasta", "Risotto"]

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu); // ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto"]

// Iterables: arrays, strings, maps, sets. But NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters); // ["J", "o", "n", "a", "s", " ", "S", ".", " "]

const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Ingredient 2?`),
  prompt(`Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Spread operator with Objects
const newRestaurant = { foundingIn: 1998, ...restaurant, founder: "Giuseppe" };
console.log(newRestaurant);


// Shallow copy of objects using spread operator
const restaurantCopy = {...restaurant};

restaurantCopy.name = "Ristornate Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);