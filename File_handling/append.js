const fs = require("fs");

fs.appendFile("File_handling/data.txt", "\n Hello world ", (error) =>{
    console.log("Data is appended successfully");
})

/*
Lecture # 72:
    Topic : Append File in JavaScript

    Append File:
        Appending means adding new data
            at the end of a file.
*/