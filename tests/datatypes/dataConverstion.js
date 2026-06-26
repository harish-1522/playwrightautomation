let val1 = "5";
let val2 = "10";

console.log("Before conversion:");
console.log("val1:", val1, "Type:", typeof val1);
console.log("val2:", val2, "Type:", typeof val2);

// Convert string → number

numval1 = parseInt(val1);
numval2 = parseFloat(val2);

console.log("After conversion:");
console.log("val1:", numval1, "Type:", typeof numval1);
console.log("val2:", numval2, "Type:", typeof numval2);

console.log("Sum:", numval1 + numval2);  //add
console.log("Difference:", numval2 - numval1); //subtract
console.log("Product:", numval1 * numval2); //multiply
console.log("Quotient:", numval2 / numval1); //divide

//convert number → string
let strval1 = numval1.toString();
let strval2 = numval2.toString();

//convert number → boolean
let boolval1 = Boolean(numval1);
let boolval2 = Boolean(numval2);

//convert string → boolean
let boolval3 = Boolean(val1);
let boolval4 = Boolean(val2);
//convert boolean → string
let strval3 = boolval1.toString();

//convert boolean → number
let numval3 = Number(boolval1);
let numval4 = Number(boolval2); 

console.log("After conversion to string and boolean:");
console.log("strval1:", strval1, "Type:", typeof strval1);
console.log("strval2:", strval2, "Type:", typeof strval2);

console.log("boolval1:", boolval1, "Type:", typeof boolval1);
console.log("boolval2:", boolval2, "Type:", typeof boolval2);
console.log("boolval3:", boolval3, "Type:", typeof boolval3);
console.log("boolval4:", boolval4, "Type:", typeof boolval4);

console.log("strval3:", strval3, "Type:", typeof strval3);
console.log("numval3:", numval3, "Type:", typeof numval3);
console.log("numval4:", numval4, "Type:", typeof numval4);  

console.log("Sum of numval3 and numval4:", numval3 + numval4);  //add
console.log("Difference of numval4 and numval3:", numval4 - numval3);

console.log("Product of numval3 and numval4:", numval3 * numval4);
console.log("Quotient of numval4 and numval3:", numval4 / numval3);

console.log("Concatenation of strval1 and strval2:", strval1 + strval2);  //concatenate

