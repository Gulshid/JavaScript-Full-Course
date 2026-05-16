class Animals{
    constructor(name) // constructor function / method
    {
        this.name = name;
    }
}

class Dog extends Animals{
    constructor(name) // constructor function / method
    {
        super(name);
    }
}


const d1 = new Dog("Tomey");
console.log(d1);
/*
Lecture # 61
    Topic : super Keyword in JavaScript

    super Keyword:
        super is used to call parent class constructor or methods.
*/