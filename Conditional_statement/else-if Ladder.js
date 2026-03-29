// Tempreture

let temp = 20;

if (temp > 30) // condition 1 ==> false
{
    console.log("The Temp :", temp, " is Hot");
}

else if (temp > 20)  // condition 2 ====> false
{
    console.log("The Temp :", temp, " is Warm");
}

else if (temp > 10) // condition 3 ====> true
{
    console.log("The Temp :", temp, " is Cool");
}

else
{
    console.log("The Temp :", temp, " is Cold");
}



/*
Lecture # 22
    TOPIC :  else - if Ladder Statement in JavaScript

    Basic Structure of else - if Ladder :
        if (condition1) { // true
            STATEMENT
        }
        else if (condition2) { // true
            STATEMENT
        }

        else if (condition3) { // true
            STATEMENT
        }

        else { 
            STATEMENT
        }
*/

