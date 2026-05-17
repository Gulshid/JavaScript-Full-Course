class Animals{
    sound(){
        console.log("Animals make a sound");
    }

}

class Cat extends Animals{
    sound(){
        console.log("Meow");
    }

}


const c1 = new Cat();

c1.sound();
/*
Lecture # 62
    Topic : Polymorphism in JavaScript

    Polymorphism:
        Polymorphism means same method works differently in different classes.
*/