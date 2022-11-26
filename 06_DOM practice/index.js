////////////////// Practice -1 ////////////////////////////
// let names = [10,20,30,40,50]

// const createList = function(){
//     display_names(names);
// };

// const display_names = function(myarrayList){
//     let htmlNames = '';
//     myarrayList.forEach((name)=>{
//         htmlNames+=`<li style="width:200px;height:200px;background-color:yellow;border:1px solid black; ">${name}</li>`
//     });
//     console.log(htmlNames)

//     document.querySelector('.list_items').innerHTML = htmlNames;
// }

// const modifyArray = function (){
//     const modified = names.map(val=> val*10)
//     names = modified;
//     display_names(modified);
// }

//////////////// Practice -2 ///////////////////////////////

// let names = [
//     {'name' : 'chandu'},
//     {'name' : 'Madhu'},
//     {'name' : 'Rama'},
//     {'name' : 'Vara'},
//     {'name' : 'jyot'},

// ]

// const createList = function(){
//     display_names(names);
// };
// const display_names = function(myarrayList){
//     let htmlNames = '';
//     myarrayList.forEach((name)=>{
//         htmlNames+=`<li style="width:200px;height:200px;background-color:yellow;border:1px solid black; ">${name.name}</li>`
//     });
//     document.querySelector('.list_items').innerHTML = htmlNames;
// }
// const modifyArray = function (){
//     const modified = names.map((name)=>{
//         return {
//             'name': name.name +' Edueka-Student'
//         };
//     });
//     display_names(modified);
// }

/////////////// Practice -3 ////////////////////

// let names = [
//     {'name' : 'chandu'},
//     {'name' : 'Madhu'},
//     {'name' : 'Rama'},
//     {'name' : 'Vara'},
//     {'name' : 'jyot'},

// ]

// const createList = function(){
//     display_names(names);
// };
// const display_names = function(myarrayList){
//     let htmlNames = '';
//     myarrayList.forEach((name)=>{
//         htmlNames+=`<li style="display:inline-block;width:200px;height:200px;background-color:yellow;border:1px solid black; ">${name.name}</li>`
//     });
//     document.querySelector('.list_items').innerHTML = htmlNames;
// }
// const modifyArray = function (){
//     const modified = names.map((name)=>{
//         return {
//             'name': name.name +' Edueka-Student'
//         };
//     });
//     display_names(modified);
// }
// const username = document.getElementsByClassName('username');
// console.log(username);
// const filterdata = function(){
//     console.log('hi filter');
//     console.log(username);
//     // const filteredArr = names.filter((name)=>{
//     //     return name.name.toLowerCase() === username.toLowerCase();
//     // });
//     // display_names(filteredArr)
// };

///////////////////////Practice 4

let names = [
  { name: "chandu", age: 22 },
  { name: "Madhu", age: 20 },
  { name: "Rama", age: 55 },
  { name: "Rama", age: 55 },
  { name: "Vara", age: 35 },
  { name: "jyot", age: 18 },
];
let getfilterby = "";
let inputval = "";

function getfilterdata(event) {
  getfilterby = event.target.value;
  console.log(getfilterby);
}

function changeHandle(event) {
  inputval = event.target.value;
  console.log(inputval);
  //   inputval = getfilterby === "age" ? Number(inputval) : String(inputval);
}

const createList = function () {
  display_names(names);
};
const display_names = function (myarrayList) {
  let htmlNames = "";
  myarrayList.forEach((name) => {
    htmlNames += `<li style="display:inline-block;width:200px;height:200px;background-color:yellow;border:1px solid black; "><h5>${name.name}</h5>
        <h5>${name.age}</h5>
        </li>`;
  });
  document.querySelector(".list_items").innerHTML = htmlNames;
};
const modifyArray = function (method_type, name = "dummy", second = 0) {
  if (method_type === "pop") {
    names.pop();
    display_names(names);
  }
  if (method_type === "push") {
    console.log(names);
    const age = second;
    names.push({ name: name, age: age });
    // names.unshift({'name' :name})
    console.log(names);
    display_names(names);
  }

  if (method_type === "slice") {
    start = name;
    const modify = names.slice(start, second);
    display_names(modify);
  }
  if (method_type === "splice") {
    start = name;
    names.splice(start, second, { name: "Kashish" });
    display_names(names);
  }

  if (method_type === "find") {
    if (getfilterby !== "") {
      let mod = [];
      const findedelement = names.find((item) => {
        return item[`${getfilterby}`] === inputval;
      });
      //   console.log(findedelement);
      mod.push(findedelement);
      console.log(mod);
      display_names(mod);
    } else {
      alert("Select the filter first");
    }
  }

  if (method_type === "filter") {
    console.log(getfilterby);
    console.log(inputval);
    if (getfilterby !== "") {
      inputval = getfilterby === "age" ? Number(inputval) : String(inputval);
      const mod = names.filter((item) => {
        return item[`${getfilterby}`] === inputval;
      });
      console.log(mod);
      display_names(mod);
    } else {
      alert("Select the filter first");
    }
  }
};
