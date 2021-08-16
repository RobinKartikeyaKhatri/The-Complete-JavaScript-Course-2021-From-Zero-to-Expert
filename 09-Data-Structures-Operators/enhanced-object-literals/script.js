"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [`day-${2 + 3}`]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}


const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,
//   printRestaurantName: function() {
//       console.log(this.name);
//   }
  printRestaurantName() {
      console.log(this.name);
  }
};

console.log(restaurant);
restaurant.printRestaurantName();

console.log(openingHours);