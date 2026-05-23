class User{
    // constructor function
    constructor(name){
        this._name = name;
    }

    // getter function
    get name(){
        return this._name;
    }

    // setter function
    set name(val){
        this._name = val;
    }
}

const u1 = new User("Ali"); // call constructor function

console.log(u1.name); // getter function call

u1.name = "Muhammad"; // setter function call

console.log(u1.name); // getter function call

/*
Lecture # 64
    Topic : Getter and Setter in JavaScript

    Getters & Setters:
        Getters get value and setters set value.
*/