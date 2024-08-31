/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 


Do this once using using a `for...in` loop and once using `Object.values`.


Examples:

let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

function valuesInObject(obj) {
  // Your code here
  let arr1 = [];
  for(let key in obj){
    let value = obj[key];
    arr1.push(value);
  }
  let arr2 = Object.values(obj);
  return arr2;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuesInObject;
