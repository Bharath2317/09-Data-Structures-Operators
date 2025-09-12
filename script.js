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

  ordering: function (ing1, ing2, ing3) {
    console.log(`Your Dosa was prepared!,It has ${ing1},${ing2},${ing3}`);
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

  orderpizza: function (main_ing, ...optional_ing) {
    if (optional_ing.length == 0) {
      optional_ing.push('onions', 'pepper');
    }
    console.log(main_ing);
    console.log(optional_ing);
  },

  delivery: function ({ time, place, maincourse, starter }) {
    console.log(
      `You order will be delivered at ${time} to ${place} which consist's of ${this.mainMenu[maincourse]} and ${this.starterMenu[starter]}`
    );
  },
};

// ///// *****The Nullish coalescing Operator (??)********* //////

// // This operator consider both the  "0" and " "///

// console.log(0 ?? 'jonas');
// console.log('' ?? 'jonas');

// restaurant.num = 0;
// const guest94 = restaurant.num ?? 'jonas';
// console.log(guest94);

// //// ****Short Circuiting(&& and ||)****** ////
// console.log('' || 'jonas');
// console.log(null || 0); //print the second falsy value
// console.log(23 || 'johnas'); //gives the first truthy value
// console.log(0 || '' || 'john'); // ignores the falsy value due to short circuiting

// restaurant.num = 23;
// const guest = restaurant.num ? restaurant.num : 'no';
// console.log(guest); //since restaurant.num is true it has given value otherwise it may become false

// const guest1 = restaurant.num || 10;
// console.log(guest1);

// console.log('____&&_____');
// //it is exact reverse of "||"

// console.log('' && 'jonas');
// console.log(null && 0);
// console.log(23 && 'johnas');
// console.log(0 && '' && 'john');

// const guest12 = restaurant.num && 10;
// console.log(guest12);

// // ***REST OPERATOR***//
// // It is spread if it is in the right sife of the "="
// const arr = [1, 2, ...[3, 4]];

// //It is REST, if it is leftside "="
// const [a, b, ...arr1] = [1, 2, 3, 4, 5];
// console.log(a, b, arr1);

// //IT does not include skipped elements
// const [pizza, , , , , garlicbread, ...items] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, garlicbread, items);

// //objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdays);

// //functions
// const add = function (...parameters) {
//   let sum = 0;
//   for (let i = 0; i < parameters.length; i++) sum += parameters[i];
//   console.log(sum);
// };

// add(4, 2, 3);

// const arr3 = [4, 5, 6];
// add(...arr3);

// restaurant.orderpizza('mushroom', 'onions', 'olives');
// restaurant.orderpizza('mushroom');

// ////////SPREAD OPERATOR///////////

// const arr = [1, 2, 3, 4];
// const arr2 = [4, 5, arr[0], arr[1], arr[2]];
// const arr3 = [4, 5, ...arr];
// console.log(arr2);
// console.log(arr3);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Dosa'];
// console.log(newMenu);

// //Join 2 array's
// const newMenu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(newMenu1);

// //copy
// const catalog = [...restaurant.categories];
// console.log(catalog);

// // Iterables:arrays,strings,maps,sets,NOT objects
// const str = 'BHARATH';
// const str2 = ['P.', ...str];
// console.log(str2);
// console.log(...str2);

// const ingridents = [
//   // prompt('ingrideient1'),
//   // prompt('ingridient2'),
//   // prompt('ingridient3'),
// ];

// restaurant.ordering(...ingridents);
// //Objects
// const newRestaurant = { newName: 'LUMNI', ...restaurant, founder: 'Bharath' };
// console.log(newRestaurant);

//////// Destructuring object
//***************** */
// restaurant.delivery({
//   time: '10:30',
//   place: 'banglore',
//   maincourse: 2,
//   starter: 2,
// });

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   categories: list,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantName, list, hours);

// // Default
// const { menu = [], categories: types = [] } = restaurant;
// console.log(menu, categories);

// //mutating
// let a = 12;
// let b = 13;
// const abj = { a: 23, b: 24, c: 30 };
// ({ a, b } = abj);
// console.log(a, b);

// // Nested
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// /////////////Destructure array
// const arr = [1, 2, 3];
// const first = arr[0];
// const second = arr[1];
// const thrid = arr[2];
// console.log(first, second, thrid);

// // By using destucturing of arrays

// const [first1, second1, thrid1] = arr;
// console.log(first1, second1, thrid1);
// console.log(arr);

// // TO access specific elements
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //  To switch
// // let temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 3));

// // NESTED ARRAY
// const array2 = [1, 2, [3, 4]];
// const [first2, , thrid3] = array2;
// console.log(first2, thrid3);
// const [one, , [thrid4, thirid2]] = array2;
// console.log(one, thrid4, thirid2);

// // default
// const array4 = [3, 4];
// const [i = 2, j = 1, m = 1, k = 1, l = 1] = array4;
// console.log(i, j, m, k, l);

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...teamplayers] = players1;
console.log(gk, teamplayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const plyersfinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(plyersfinal);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printgoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals has been scored`);
};

printgoals(...game.scored);
game.scored.forEach(goal => console.log(goal));

team1 < team2 && console.log('team1 is more likely to win');
team1 > team2 && console.log('team2 is likely to win');

for (const [index, players] of teamplayers.entries()) {
  console.log(`${index + 1}: ${players}`);
}
