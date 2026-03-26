/*
Lecture # 19
    Topic : Short Circuit Evaluation in JavaScript
    Short-Circuit Evaluation:
        Short-circuit evaluation is a behavior of logical operators
        (&& and ||) where JavaScript stops 
        evaluating further expressions as soon as the result is determined.

Used with logical operators.

&& and ||

=============================
*/

// && logical Operator 
console.log("=======Logical &&=========");
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log("==== short circuit evaluation && :");
console.log(false && "Hello"); // false

console.log("================");

// || logical Operator 
console.log("=======Logical ||=========");
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log("==== short circuit evaluation || :");
console.log(false || "World"); // "World"