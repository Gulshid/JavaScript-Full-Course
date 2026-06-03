const fs = require("fs");

fs.writeFile("File_handling/data.txt", "This is write file in Js", (error) => {
    console.log("Data is Written in file");
});
/*
Lecture # 72:
    Topic : Write File in JavaScript

    Write File:
        Writing a file means creating a new
                file or replacing old content.
*/