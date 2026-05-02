function calculator(a, b, operation)
{
    return operation(a, b);
}


function add(x, y)
{
    return x + y;
}


console.log("The add of two value is :", calculator(5, 10, add));
/*
Lecture # 47
    Topic : Higher-Order Functions in JavaScript

    Higher-Order Functions:
        Functions that take another function as parameter or return a function.
*/