function Person(name, age)
{
    this.name = name;
    this.age = age;
}

const p1 = new Person("Gulshid Zada", 23);
const p2 = new Person("Ali", 20);

console.log(p1.name, p1.age);
console.log(p2.name, p2.age);
/*
const p1 = {
    name : "Gulshid Zada",
    age : 23
};

const p1 = {
    name : "ali",
    age : 20
};
*/
/*
Lecture # 55
    Topic : Constructor Function in javaScript

    Constructor Function:
        A constructor function is a special function used to create objects.
*/