const student = {
    name : "Gulshid Zada",
    age : 23,
    roll_no : 391,
    marks : 450,

    greet : function hello(){
        console.log("Hello "+ this.name);
    }

};

console.log(student.name, student.roll_no, student.age, student.marks); // properties 
student.greet(); // methods


/*
Lecture # 50
    Topic : Properties & Methods in JavaScript

    Properties & Methods:
        * Properties = values
        * Methods = functions inside object
*/