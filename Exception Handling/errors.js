/*
Lecture # 65
    Topic : Syntax Error vs Runtime Error

    Syntax Error vs Runtime Error:
        1. Syntax Error:
            A syntax error happens when the code rules are wrong,
                so JavaScript cannot run the program.
        
            Example : console.log("Hello" ==> incorrect
            console.log("Hello"); // ===> correct
        **************************

        2. Runtime Error:
            A runtime error happens while the program is running.

                Example :
                let num = 10;
                console.log(num.toUpperCase()); 
                      *  toUpperCase() works on strings, not numbers.
        **************************
        
*/