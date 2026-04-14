const User = {
    name : "Gulshid Zada",
    age : 23,
    Marks : 89,
};

// Use for in loop
for(let z in User)
{
    console.log(z, User[z]);
}
/*
Lecture # 29
    Topic : for in Loop in JavaScript

    5. for...in Loop :
        Used for object properties (keys).

    Syntax :
        const user = {
        name: "Ali",
        age: 22
        };

    for (let key in user) {
        console.log(key, user[key]);
        }

*/