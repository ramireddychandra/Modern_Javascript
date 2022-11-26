const openingHours = {
  thur: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 14,
    close: 24,
  },
  sat: {
    open: 0,
    close: 12,
  },
};

// for (const day of Object.keys(openingHours)) console.log(day);

// const day_arr = Object.keys(openingHours);
// console.log(day_arr);
// Keys from objects
const properties = Object.keys(openingHours); //['thu','fri ,'sat']
console.log(properties);
let openStr = ` we are open on ${properties.length} days : `;
console.log(openStr);
for (const day of properties) {
  openStr += `${day} , `;
}
console.log(openStr);

// values

const values = Object.values(openingHours);
for (const val of values) {
  console.log(val);
}

// Entries

for (const [Key, { open, close }] of Object.entries(openingHours)) {
  console.log(`${Key} : open at ${open} close at ${close}`);
}

const dd = [2, 5, 4, 8];
for (const [Key, val] of dd.entries()) {
  console.log(`${Key} : ${val}`);
}
