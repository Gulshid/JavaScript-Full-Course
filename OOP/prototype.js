function Student(name)
{
    this.name = name;
}

Student.prototype.sayhello = function () {
    console.log("Hello");
}

const s1 = new Student("Gulshid Zada");
const s2 = new Student("Ali");

console.log(s1, s2);
s1.sayhello();
s1.sayhello();



/*
Lecture # 56
    Topic : Prototype in JavaScript

    Prototype Concept:
        Prototype is a way to share
        methods/functions between all objects.

Instead of creating the same function again
and again, JavaScript stores it once in prototype.
*/