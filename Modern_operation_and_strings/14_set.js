const OrderSet = new Set([
  "Pizza",
  "Bread",
  "Pizza",
  "Bear",
  "Pizza",
  "Burger",
]);
console.log(OrderSet);

//  To Check the size in set
console.log(OrderSet.size);

const StringSet = new Set("Jonas");
console.log(StringSet, StringSet.size);

// To add Element in the set..
OrderSet.add("Dosa");
console.log(OrderSet);

// To delete the element from set
OrderSet.delete("Bear");
console.log(OrderSet);

// To Check whether the element is found in set or not

console.log(OrderSet.has("Pizza"));

// Iterable
for (const item of OrderSet) console.log(item);

//Convert Set to list
const Staff = ["Manager", "Staff", "Manager", "Register"];
const Staffunique = new Set(Staff);
console.log(Staffunique);
const list1 = [...new Set(Staff)];
console.log(list1);
//  To find the length or size

console.log(new Set("ramireddychandrasekharreddy").size);
