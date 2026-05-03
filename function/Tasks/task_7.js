function hello_1()
{
    console.log("Hello _ 1");
}

function hello_2(x)
{
    console.log("Hello _ 2");
    x();
}

hello_2(hello_1);

/* Callback Functions */