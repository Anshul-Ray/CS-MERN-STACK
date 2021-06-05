//Shadowing
var a = 100;
{
    var a = 10;
    var b = 20;
    var c = 30;
}

console.log(a,b,c);
//Illegal shadowing
let d = 100;
{
    var d = 10;
}

console.log(d);