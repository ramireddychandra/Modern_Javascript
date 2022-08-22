const date1 = new Date("2022 08 17");
const date2 = new Date("2022 08 19");

const days = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

console.log(days(date1, date2));

///////////////////////////////////////
// Operations With Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
