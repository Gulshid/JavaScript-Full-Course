function greet(name, callback)
{
    console.log("Hello " + name);
    callback();
}


function bye()
{
    console.log("Good bye");
}

greet("Gulshid Zada",bye);



/*
Lecture # 46
    Topic : Callback Functions in JavaScript

    Callback Functions:
        A function passed as an argument to another function.
*/