function myFunc()
{
    // var sec;
    // var x = document.getElementById("frm");
    // for(let i = 1; i<x.length ; i++)
    // sec += x.elements[i].value;
    var sec = document.getElementById("tm").value;
    document.getElementById("screen").innerHTML = sec;
    console.log(sec);
}