// Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);

// const pas = {
//   name: "Chandu",
//   roll: 1190,
//   num: "DEF458",
//   kir: "Hello World",
// };
// console.table(pas);

// console.assert(10 > 20, "erroe meassage applied / Raised");
console.time();
for (let i = 0; i < 100000; i++) {}
console.timeEnd();
