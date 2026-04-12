//  Example # 1
let x = 1;


do{
    console.log(x);
    x++; // x = x + 1 || x += 1;

}

while(x <= 20);

console.log("=============");

//  Example # 2
let y = 1;


do{
    console.log(y); // at least once print
    y++;  // y = 2

}

while(y >= 20); // false


/*
Lecture # 27
    Topic : do - while loop in JavaScript


    3. do...while Loop:
        Runs at least once, even if condition is false.

    Syntax : 
        initialization; ==> let a = 1;

        do{
            run code ==> console.log(a);
            update;  ===> a++;
        }

        while(condition); ===> a >= 10;

*/