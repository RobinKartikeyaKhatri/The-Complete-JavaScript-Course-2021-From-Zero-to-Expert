"use strict";

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

};


// Optional Chaining - If the 'mon' property exists then 'open' will be read
console.log(restaurant.openingHours.mon?.open);

// Multiple Optional Chaining - If the 'openingHours' exists and 'mon' exists then 'open' will be read
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}


// Optional Chaining for Methods - We can check if a method exists before we call it

console.log(restaurant.order?.(0, 1) ?? "Method does not exists");   // if the 'restaurant' object have a 'order' method then call it, other wise "Method does not exists"

console.log(restaurant.orderRisotto?.() ?? "Method does not exists");   // since 'restaurant' object does not have any method called 'orderRisotto', so it will print a string "Method does not exists"

// Optional Chaining on Arrays
const users = [
    {
        name: "Jonas",
        email: "hello@jonas.io"
    }
];

console.log(users[0]?.name ?? "User array is empty");   // If the users[0] exists then extract 'name' property from here, otherwise print "User array is empty"
