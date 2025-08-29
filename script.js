'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (maincourse, starter) {
    return [this.mainMenu[maincourse], this.starterMenu[starter]];
  },

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

const arr = [1, 2, 3];
const first = arr[0];
const second = arr[1];
const thrid = arr[2];
console.log(first, second, thrid);

// By using destucturing of arrays

const [first1, second1, thrid1] = arr;
console.log(first1, second1, thrid1);
console.log(arr);

// TO access specific elements
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//  To switch
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 3));

// NESTED ARRAY
const array2 = [1, 2, [3, 4]];
const [first2, , thrid3] = array2;
console.log(first2, thrid3);
const [one, , [thrid4, thirid2]] = array2;
console.log(one, thrid4, thirid2);

// default
const array4 = [3, 4];
const [i = 2, j = 1, m = 1, k = 1, l = 1] = array4;
console.log(i, j, m, k, l);
