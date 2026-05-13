const user = {
    name : "Gulshid Zada",

    showname : function()
    {
        console.log(this.name); // user.name
    }
}

console.log(user.name);
user.showname();

/*
Lecture # 58
    Topic : this Keyword in JavaScript

    this Keyword:
        this refers to the current object.
        this.name
        this.age
*/