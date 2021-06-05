var x = 1;
a();
b();

console.log(x); // console logs shows the value of gobal variable x which is 1.

function a() // Function 'a' runs and value of x is declared locally into this function. 
{
    var x = 10;
    console.log(x);
}

function b() // Function 'b' runs and value of x is declared locally into this function.
{
    var x = 100;
    console.log(x);
}