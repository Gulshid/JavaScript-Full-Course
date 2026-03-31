// Week days
let days = 6;

switch(days)
{
    case 1: console.log("Monday "); // false
        break;
    
    case 2: console.log("Tuesday"); // false
        break;

    case 3: console.log("Wednesday"); //false
        break;

    case 4: console.log("Thursday"); // false
        break;

    case 5: console.log("Friday"); // false
        break;

    case 6: console.log("Saturday"); // true
        break;

    case 7: console.log("Sunday");
        break;

    default: console.log("Invalid Days");

}

/*
Lecture # 24
    Topic : Switch Statement in JavaScript

Basic Structure of Switch Statement:-
    let value = 2;
    switch(value) {
    case 1: Statement 1 ==> false
        break;
    case 2: Statement 2 ===> true
        break;
    case 3: Statement 3 ===> false
        break;
    default: Statement 4  ===> false
    }

Main (Common) Difference

* if-else checks conditions (logic). ===> used for conditions like >, <, &&, ||
* Switch checks values (equality). =====> used for matching exact value (===)

*/