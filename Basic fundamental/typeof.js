// Lecture # 9
//    Topic : Typeof in JavaScript

/* 
Finding Data Types in JavaScript using typeof
*/

// 1. Primitive datatype 
// number
var a = 2;
console.log(typeof a);
var b = 3.4;
console.log(typeof b);

// string
var text = "Hello World";
console.log(typeof text);


// boolean
let istrue = true;
console.log(typeof istrue);


// undefined
var value;
console.log(typeof value);

// null
let d = null;
console.log(typeof d);


// bigint
var num = 123456789n;
console.log(typeof num);


// symbol
let sys = Symbol("id");
console.log(typeof sys);

// 2. Non Primitive Datatype
// object
users = {
    name : "ALi",
    age : 23
}

console.log(typeof users);


// Array
let arr = [1,2,3,4];
console.log(typeof arr);


// function
let func = function () {};
console.log(typeof func);