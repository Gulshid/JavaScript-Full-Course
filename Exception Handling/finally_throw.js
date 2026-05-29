let age = 19;
// Exception handling structure
try{
    if(age < 18){
        throw new Error("Age is under 18");
    }

}catch(error){
    console.log("Error", error.message);

}finally{
    console.log("Program finished");
}
/*
    Lecture # 67
        Topic : finally and Throw in JavaScript
    finally :
        finally always runs whether error happens or not.

    throw:
        throw is used to create your own error.
*/