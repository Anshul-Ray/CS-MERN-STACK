// A function bind together with its lexical environment 
//Ex-1
/*let b=20;
function x()
{
    var a =10;
    function y()
    {
        console.log(a,b);
    }
    return y;
}

let z = x();
z();
x()();
console.log(x()());*/
//Ex-2
/*let b=20;
function x()
{
    var a =10;
    function y()
    {
        console.log(a,b);
    }
    a = 100;
    return y;
}

let z = x();
z();
x()();
console.log(x()());*/
//Ex-3
/*let b=20;
function x()
{
    var a =10;
    function y()
    {
        console.log(a*b);
        function z()
        {   
            console.log(a,b);
        }
        return z;
    }
    return y;
}

x()()();
*/
function timer()
{
    for(var i = 1; i<=5 ; i++)
    {
        var j = i-4;
        setTimeout(function()
        {
            console.log(j++);
        }, i*1000);
    }
}
timer();