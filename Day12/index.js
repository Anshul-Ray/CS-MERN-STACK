//try, catch and finally
function errorHandle(flag)
{
    try
    {
        if (flag)
        {
            throw{ message: "Invalid statement", code: 1001 };
        }
        else
        {
            console.log("No error");
        }
    }
    
    catch(err) 
    {
        console.log(err.message);
        console.log("Error :", err.code);
    }
    
    finally
    {
        console.log("System clear!");
    }
}

errorHandle(true);
// function change(obj)
// {
//     obj.innerHTML = "Text changed";
//     console.log("Text is goin to change!");
// }

// (function(){
//     document.getElementById("para").ondblclick = change;
// })();

function ShowPopUp()
{
    alert("Welcome to the page");
}

function changeBG(obj)
{
    obj.style.color = "red";
}
function changeBGA(obj)
{
    obj.style.backgroundColor = "white";
}
function first()
{
    // document.getElementById("para").innerHTML = "Hello";
    return 0;
}
function second(first)
{
    let value = first();
    document.getElementById("para").innerHTML = "World";
    console.log(value);
}

// first();
second(first);
const message = function ()
{
    console.log("This is a message");
}
setTimeout(message , 1);

for(let i = 0; i<=10000 ; i++)
{
}
console.log("Loop Finished");

/*
firstReq(function(response)){
    secondReq(response, function(nextResponse)){
        thirdReq(nextResponse, function(finalResponse)){
            console.log(finalResponse);
        },errorCheck)
    },errorCheck)
},errorCheck)
*/

//Promises
/*
    1- Pending
    2- Fullfiled / Resolved
    3- Rejected
*/

const myPromise = new Promise((resolve,reject)=>{
    // if condition true then resolve else reject
    if (true)
    {  
        resolve("Promise resolved");
    }
    else
    {
        reject("Promise Rejected");
    }
})

arr = [1,2,3,4];
let objec = {
    v1 : 1,
    v2 : 2
};
let obj2 = {
    city : "Jdp"
};
obj2.__proto__ = objec;
