/* let greeting = "Hello, VarMa!", welcome = "India"
console.log(greeting, welcome);
*/

// let
let val = 10;
console.log("the value is: " + val);

// const
const APP_URL = "https://www.google.com";
// APP_URL = "https://www.facebook.com"
console.log("the app url is: " + APP_URL);

// var
var count = 5;

if (true) {
    var count = 10;
    console.log("the count inside the block is:", count);
}

console.log("the count outside the block is:", count);

// boolean
console.log("the value of true is: " + true);

let booleanValue = false;
console.log("the value of booleanValue is: " + booleanValue);

console.log(5 < 10);
console.log(typeof(5 < 10)); // Output: boolean

//functions
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 4));

