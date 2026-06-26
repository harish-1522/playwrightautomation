let firstName = "Kalidindi";
let lastName = "";
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
if (firstName) {
    console.log("The value of firstName is truthy.");
} else {
    console.log("The value of firstName is falsy.");
}
if (lastName) {
    console.log("The value of lastName is truthy.");
} else {
    console.log("The value of lastName is falsy.");
}   


// other example
let firstName1 = "Addala";
let lastName1 = "Sarvani";

if (!firstName1 || !lastName1) {
    console.log("Either firstName1 or lastName1 is falsy.");
} else {
    console.log("Both firstName1 and lastName1 are truthy.");
}

 