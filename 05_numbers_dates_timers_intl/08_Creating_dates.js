// // Creating Dates

// const now = new Date();
// console.log(now);

// console.log(new Date("Aug 02 2022 18:55:51"));
// console.log(new Date("August 27, 1999 18:05:34"));

// const now = new Date(2037, 10, 19, 15, 23);
// console.log(now);
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getTime());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getTimezoneOffset());
// console.log(now.toISOString());

// //  2142237180000 got from the getTime() -----> console.log(now.getTime());
// console.log(new Date(2142237180000));
// console.log(new Date(166089923553));

// console.log(Date.now());
// console.log(new Date(1660899423810));

////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////
// Creating Dates

// Create a date

const now = new Date();
console.log(now);

console.log(new Date("Aug 02 2020 18:05:41"));
console.log(new Date("December 24, 2015"));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

future.setFullYear(2040);
console.log(future);
