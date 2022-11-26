// step -1

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals

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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Function-2 OrderDelivery one argument is object we are destructing that object below..
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    address,
    time = "20:00",
  }) {
    console.log(
      `you Ordered ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} from ${address} at ${time}`
    );
  },
};

// Destructoring Objects ...
///////////////////////////////////////////////////////
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
//////////////////////////////////////////////////////
// we can duplicate the variable names as follows
const { name: hotelname, openingHours: open, categories: items } = restaurant;
console.log(hotelname, open, items);
///////////////////////////////////////////////
// defaul values to the destructing Objects ..
const { menu = [], categories: items2 = [] } = restaurant;
//  In Above code menu not present so it gives menu as [] and categories as ilist so returns that if its not avaliable then it gives default .
console.log(menu, items2);

// ////////////////
// Mutating variables
a = 777;
b = 555;
c = 444;
const obj = { a: 25, b: 35, c: 45 };
({ a, b, c } = obj); // Destructing Objects ...
console.log(a, b, c);

// Nested Objects...
const {
  sat: { open: opened, close },
} = openingHours;
console.log(opened, close);

// Order delivery
restaurant.orderDelivery({
  time: "22:30",
  address: "kadapa 1-256",
  starterIndex: 2,
  mainIndex: 0,
});

restaurant.orderDelivery({
  address: "Yerraguntla 1/452",
});
// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours =

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 enhanced object literals
//   openingHours :{
//     [weekdays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     [weekdays[4]]: {
//       open: 11,
//       close: 23,
//     },
//     [weekdays[5]]: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };

//   order :function(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// }

// //   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
// //     console.log(
// //       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// //     );
// //   },

// //   orderPasta(ing1, ing2, ing3) {
// //     console.log(
// //       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
// //     );
// //   },

// //   orderPizza(mainIngredient, ...otherIngredients) {
// //     console.log(mainIngredient);
// //     console.log(otherIngredients);
// //   },
// // };

// ///////////////////////////////////////
// // Destructuring Objects
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
