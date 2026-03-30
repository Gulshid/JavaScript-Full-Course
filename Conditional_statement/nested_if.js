// num ===> Positive , Negative , Zero

let num = -10;

if(num >= 0) // true / false
{
    if(num > 0) // false
    {
        console.log("The Number ", num, " is Positive");
    }

    else if (num == 0) // true
    {
        console.log("The Number ", num, " is Zero");
    }
}

else if (num < 0) // true
{
    console.log("The Number ", num, " is Negative")
}
/*
Lecture # 23
    Topic : Nested Condition in JavaScript

    Basic Structure of Nested Condition :-
    if (condition)
    {
        if (anotherCondition1)
        { 
            Statement 1
        }

        else if (anotherCondition2)
        {
            Statement 2
        }
    }

    else 
    {
        Statement 3
    }

    


    

*/