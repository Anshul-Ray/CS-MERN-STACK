console.log("*********************Factorial*********************")
function fact(a)
{
    if (a==0)
    {return 1;}
    else
    {return a * fact(a-1);}
}
console.log(fact(5))
console.log("*********************Functions*********************")
function funky1(p=10)
{
    return p*2;
}
console.log(funky1());
function funky2()
{
    return "Hello this is funky2";
}
console.log(funky2())
console.log("*********************Parameters Obj*********************")
var obj={
    x : 5,
    func1 : function()
    {return this.x;},
    func2 : function()
    {console.log("no returns")}
};
console.log(obj.func1())
console.log(obj.func2())