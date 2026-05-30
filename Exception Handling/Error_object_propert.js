try{
    console.log(x);

}catch(error){
    console.log(error.name); // error type 
    console.log(error.message); // error message
}

/*
Lecture #68
    Topic : Error Object Properties in JavaScript

    Error Object Properties:
        The error object gives information about the error.
        Common Properties:
          *  name → Error type
          * message → Error message
*/