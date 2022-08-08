const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Normal-Function
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// Arroy Function...

const deposits = movements.filter(mov => mov > 0);

console.log(deposits);

//  by using for of loop
const depositsfor = [];
for (const mov of movements) if (mov > 0) depositsfor.push(mov);
console.log(depositsfor);

// Withdrawl
const withdrawl = movements.filter(mov => mov < 0);
console.log(withdrawl);
