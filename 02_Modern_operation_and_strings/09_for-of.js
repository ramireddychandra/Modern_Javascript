const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
for (const day of weekdays.entries()) console.log(day);
console.log([...weekdays.entries()]);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const [i, dayin] of days.entries()) {
  console.log(` The ${i + 1} day is ${dayin} ... `);
}
