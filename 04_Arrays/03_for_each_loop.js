///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
//  First argument is iterative element, i is index, arr is original array...
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

const arr = ['apple', 'bappaya', 'orange'];
arr.forEach(function (elements, i, array) {
  console.log(elements, i, array);
});

const arrs = ['apple', 'bappaya', 'orange'];
arr.forEach(function (
  elements /* iterative element*/,
  i /*index*/,
  array /* always original array*/
) {
  console.log(elements, i, array);
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
