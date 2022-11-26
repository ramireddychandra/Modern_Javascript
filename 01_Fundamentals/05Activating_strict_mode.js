"use strict";

const obj1 = {
  firstName: "Ramireddy",
  lastName: "Chandra Sekhar",
  num: 9550967396,
  birthYear: 1999,
  job: "developer",
  hasDriverLicence: false,

  calcAge: function () {
    return 2022 - this.birthYear;
  },

  summary: function () {
    return `${this.lastName} is a ${2022 - this.birthYear}-Year old ${
      this.job
    } , and he ${this.hasDriverLicence ? "has" : "does not"} a diver licence`;
  },
};

const obj2 = {
  firstName: "Ramireddy",
  lastName: "Madhu sudhan",
  num: 8297446183,
  birthYear: 1996,

  calcAge: function () {
    return 2022 - this.birthYear;
  },
};

console.log(`The age of ${obj1.lastName}  is  ${obj1.calcAge()}`);
console.log(`The age of ${obj2.lastName}  is  ${obj2.calcAge()}`);
console.log("--------------------------");
console.log(obj1.summary());
