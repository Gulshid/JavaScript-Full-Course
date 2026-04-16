//  Break Statement Example 
for(let a = 1; a <= 10; a++)
{
    if(a === 5) break;
    console.log(a);
}

console.log("================");

// Continue Statement Example 
for (let b = 1; b <= 10; b++)
{
    if(b === 5) continue; // continue ==> skip the value
    console.log(b);
}

/*
Lecture # 31:
    Topic : Break and Continue Statement in JavaScript

    break Statement:
        Stops the loop completely.

    Syntax :
        for (let i = 0; i < 5; i++) {
            if (i === 3) break;
            console.log(i);
            }

==============================================
    Continue Statement:
        Skips current iteration.

    Syntax : 
        for (let i = 0; i < 5; i++) {
            if (i === 2) continue;
            console.log(i);
            }

 */