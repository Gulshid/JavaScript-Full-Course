let arr = ["A", "B", "C", "D"];
console.log("Array:", arr);
console.log("=============");

//  splice() → add/remove elements (modifies original array)
// remove element
arr.splice(2, 1);
console.log("Array :", arr);
console.log("=============");

// add element
arr.splice(4, 0, "Hello", "WOrld", "Z");
console.log("Array :",arr);
console.log("=============");

//   slice() → returns new array (does NOT change original)
let x = arr.slice(1, 3);
console.log(x);

/*
Lecture # 41
    Topic : splice() and slice() in JavaScript

    splice() → add/remove elements (modifies original array)

    slice() → returns new array (does NOT change original)
*/