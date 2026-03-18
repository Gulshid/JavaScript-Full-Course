/*
    Lecture #16
        Topic : Unary Operator in JavaScript
    5️ Unary Operators:
        Unary operators work on a single operand and perform operations like increment,
        decrement, type conversion, and type checking.

        let x = 5 ==> operand 
        ++ , -- , + , - , typeof
*/

    // ++ INCREMENT UNARY OPERTAOR 

    // pre Increment ++

    let x = 3;
    console.log("Pre Increment :");
    console.log(x); // x = 3
    console.log(++x); // x = 4
    console.log(++x); // x = 5

    console.log("==========");

    // post Increment ++

    let y = 2;
    console.log("Post Increment :");
    console.log(y); // y = 2
    console.log(y++);  // y = 2
    console.log(y); // y = 3

    console.log("==========");

    // -- DECREMENT UNARY OPERTAOR 

     // pre decrement --
    let a = 4;
    console.log("Pre decrement :");
    console.log(a); // a = 4
    console.log(--a); // a = 3

    console.log("==========");

    // post  decrement --
    let b = 6;
    console.log("Post decrement :");
    console.log(b); // b = 6
    console.log(b--); // b = 6 
    console.log(b); // b = 5

    console.log("==========");
    console.log("SIngle Increment :");
    console.log(+"5"); // 5
    console.log(+true); // 1

    console.log("==========");
    console.log("SIngle Decrement :");
    console.log(-"3"); // 3

    console.log("==========");

    // typeof Operator 
    console.log("Typeof Operator :");
    console.log(typeof("Hello"));
    console.log(typeof(2));
    console.log(typeof(true));