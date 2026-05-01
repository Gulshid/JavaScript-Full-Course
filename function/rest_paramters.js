function sum(...num)
{
    let total  = 0;


    for(let x of num)
    {
        total += x;
    }

    return total;

}

console.log(sum(1,2,3,4,5,6));
/*
Lecture # 46
    Topic : Rest Parameters in JavaScript

    Rest Parameters:
        Collect multiple values into one parameter.
*/