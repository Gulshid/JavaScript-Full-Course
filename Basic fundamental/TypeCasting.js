/* Lecture #: 10 
    Topic: Type Casting
================================
JavaScript Type Conversion 
================================
*/

//  Possibe Type Conversion
// 1. Number converison
//     1. String to Number conversion
var a = "4";
console.log("String :", a);

console.log("String to Number Conversion:", a - 1);
console.log("====================");


//     2. Boolean to Number conversion
var istrue = true; // 1
console.log("Boolean :", istrue);

console.log("Boolean to Number conversion :", istrue + 2);
console.log("====================");


//     3. Null to Number conversion
var x = null; // 0
console.log("Null :", x);

console.log("Null to Number Conversion :", x + 2);
console.log("====================");




// 2. String converison
//     1. Number  to String conversion
var i = 5;
console.log("Number : ", i);

console.log("Number to String Conversion :", i + "8");
console.log("====================");


// 3. Boolean converison
//     1. Number to Boolean conversion
var c = 3;
console.log("Number :", c);

console.log(Boolean(c));
console.log("====================");


//     2. String to Boolean conversion
var p = "0";
console.log("String :", p);

console.log(Boolean(p));
console.log("====================");


//     3. Null to Boolean conversion
var j = null;
console.log("Null :", j);

console.log(Boolean(j));
console.log("====================");



//     4. undefined to Boolean conversion
var k ;
console.log("Undefined: ",k);

console.log(Boolean(k));
console.log("====================");
