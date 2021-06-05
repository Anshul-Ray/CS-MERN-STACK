document.getElementById("heading").innerHTML = "I am changed"
// alert(2+3)//To give alert message
// window.print()//To print page
var x = 10;
var y = 20;
z = 30;
z = 40;
console.log(x+y+z)
var person = "Anshul"
var person = 'Ray\'s'
function a()
{
    console.log(x)
    var x = 30;
    console.log(x)
}
a();
// x = 100;
console.log(x)

//let and const keyword are used for defining block scope variables
let hello = "everyone"
{
    let hello = "World"
    console.log(hello);
}

console.log(hello);

const pi = 3.14;
console.log(pi);
console.log("**************************************Loops**************************************")
for (var i=0 ; i<5 ; i++)
{console.log(i);}
console.log(i);

//OPERATORS
/*
Assignment =, +=, -=, /=, %=, **=
Arithematic +, -, /, *
Exponential 
*/
console.log("************************************Operators************************************")
var first = 10;
var second = 20;
second += first;
console.log(second)
console.log(5**3);
console.log("***********************************Comparision***********************************")
console.log(2===2.0)
console.log(2==2.0)
console.log(2=="2")
console.log(2==="2")
console.log(3>2)
console.log(3>3)
console.log(3>=2)
console.log(10!=10)
console.log(10!="10")
console.log("************************************Ternary************************************")
if(2>3)
    console.log(true)
else
    console.log(false)
2>3 ? console.log(true) : console.log(false) ;
console.log("*************************************Logical*************************************")
if ((5%2 == 0) && (4%2 == 0))
    console.log(true)
else if((5%2 == 0) || (4%2 == 0))
    console.log(false)
else
    console.log("None")

if(!false)
    console.log(true);
else
    console.log(false);


console.log("*************************************Bitwise*************************************")
console.log(5&1);
//      0101
//      0001
//AND   0001

console.log(5|2);
//      0101
//      0010
//OR    0111

console.log(~5);
//      ~0101 => 1010 => 10
//      11111111111111111111111111111111010

console.log(5<<1);
//      0101
//Shift 1 left  1010

console.log(5>>1);
//      0101
//Shift 1 right  0010

console.log(5^1);
//      0101
//      0001
//XOR   0100