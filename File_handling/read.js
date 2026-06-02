const fs = require("fs");

fs.readFile("File_handling/data.txt", "utf8",  (err, data) => {
    console.log(data);
})