// Lecture #8:
//    Topic: Datatype in JavaScript -- Practical


// 1. Primitive Datatype
var a = 2; // integer
console.log("Int datatype :", a);

var a = 2.4; // float / decimal
console.log("float datatype :", a);

var b = "HEllo World"; // string datatype
console.log("STring Datatype :", b);


var b = 'Pakistan'; // string datatype
console.log("STring Datatype :", b);

var c = true; // boolean datatype
console.log("Boolean datatype :", c);

var c = false; // boolean datatype
console.log("Boolean datatype :", c);

let d; // undefined datatype

let value = null; // NULL datatype 
console.log("Null datatype :", value);

let e = 1234567899; // BIg Int datatype
console.log("BIg datatype :", e);


let id = Symbol("id"); // symbol datatype 
console.log("Symbol datatype :", id );

// 2. Non primitive datatype 
let user = { // object datatype 
    name : "Gulshid Zada",
    age : 23
};

console.log("Object datatype :", user);

let colors = ["red", "Blue", "Green"]; // Array datatype 
console.log("Array Datatype :",colors[0], colors[1], colors[2]);