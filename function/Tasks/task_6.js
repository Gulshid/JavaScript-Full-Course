function sumAll(...numbers)
{
    let total = 0;

    for(num of numbers)
    {
        total += num;
    }

    return total;

}


console.log(sumAll(1,2,3,4,5,6,7,8,9,10));
/* Rest Parameters */