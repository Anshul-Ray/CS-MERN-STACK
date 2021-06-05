function square(num)
{
    return num*num;
}

//Default arguement
function square1(num=4)
{
    return num*num;
}
let l = 1;
function area()
{
    let l = 10;
    let b = 20;
    console.log(l);
    return l*b;
}
console.log(area())
console.log(square(6));
console.log(square1(7));
console.log("****************************Nested Function****************************")
function a()
{
    let b =10;
    c();
    function c(){
        console.log(b);
    }
}
a();
console.log("****************************Nested Function****************************")
function demo(){
    let z=10;
    c();
    function c(){}
}
// console.log(z);
demo();
console.log("**************************Func without return**************************")
function print()
{
    console.log("Printing")
}
print();