let name = {
    fnm: "Anshul",
    lnm: "Ray"
    /*pfullnm : function()
    {
        console.log(this.fnm, this.lnm);
    }*/
}
let pfullnm = function(state)
{
    console.log(this.fnm+" "+ this.lnm+" from "+state);
}
let name2 = {
    fnm: "Hardik",
    lnm: "Pachory"
}

pfullnm.call(name,"Rajasthan");
pfullnm.call(name2,"Rajasthan");

pfullnm.apply(name,["Rajasthan"]);
pfullnm.apply(name2,["Rajasthan"]);

let pmynm = pfullnm.bind(name,"Rajasthan");
pmynm();

console.log("\n***Arrow Function***");
// 1.) Fn statement/declaration
function a()
{
    console.log("Abc");
}
// 2.) Fn expression
let b = function()
{
    console.log("Bca");
}
// 3.) Anonymous Fn
/*function()
{
    console.log("Cab");
}*/
// 4.) Named Fn Expression
let c = function xyz()
{
    console.log(xyz)
}
// 5.) First class Fn
//Functions are first class citizens in js. They can be passed as arguement
// it can be returned and also stored.
// Parameters vs Arguement

//Paramters
// Placeholders inside the fn. -> fn nm(para1,para2....,para n);

//Arguements
//Values passed in a fn call. -> nm(arg1,arg2....,argn);