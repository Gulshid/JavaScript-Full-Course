class car{
    constructor(name)
    {
        this.name = name;
    }
}


const c1 = new car("BMW");
const c2 = new car("Bogatti");
console.log(c1);
console.log(c2);

/*
Lecture # 57
    Topic : Classes $ Object in JavaScript

    Class :
        A class is a blueprint/template used to create objects.
    Object :
        Object is something created from a class.

    constructor() :
        is a special method inside a class
        It automatically runs when we create a new object.
*/