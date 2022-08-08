const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   //   return Math.trunc(Math.abs(mov * eurToUsd));
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);
//   return Math.trunc(Math.abs(mov * eurToUsd));

console.log(...movements);
console.log(...movementsUSD);

const movedesc = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;

  //   if (mov > 0) {
  //     return `Movement ${i + 1}: You deposited ${mov}`;
  //   } else {
  //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  //   }
});

console.log(movedesc);
