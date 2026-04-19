//1.  Length function / Method
let x = "JavaScript";

console.log(x.length);
console.log("=================");
//2. slice() function / Method
console.log(x.slice(0, 10));
console.log(x.slice(-6)); // Negative value allow 
console.log("=================");

//3.  substring() function / Method
console.log(x.substring(0, 10));
console.log(x.substring(-6)); //does not allow Negative value  
console.log("=================");

//4.  replace() function / Method
let text = "Hello World";
console.log(text);
console.log(text.replace("World", "Ali"));
console.log("=================");

//5.  includes(), function / Method
let value = "Hello WOrld";
console.log(value.includes("Hello"));
console.log("=================");

//6. split(), function / Method
let data = "a,b,c";
console.log(data.split(","));
console.log("=================");

//7. trim() function / Method
let y = "  hello ";
console.log(y.trim());
console.log("=================");

//8. toUpperCase() function / Method
console.log("hello".toUpperCase());
console.log("=================");

//9.  toLowerCase() function / Method
console.log("HELLO".toLowerCase());
/*
Lecture # 34
    Topic : String Methods in JavaScript

    String Methods:
        length, slice(), substring(), replace()
        includes(), split(), trim(), 
        toUpperCase(), toLowerCase()

*/