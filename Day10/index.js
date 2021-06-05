console.log("Day 10");
let d = new Date();
console.log(d);

//4 waya to create date
/*
    1- new Date() -- Current date time
    2- new Date(year,month) -- Gives first day of the given month
    3- new Date(year,month,day,hours,minutes,seconds,miliseconds) -- Sets the date
    4- new Date(miliseconds)
*/

d = new Date(2021,5,4,8,19,2,4);
console.log(d);

console.log("Date methods")
let dt = new Date();
console.log(dt.getTime());
console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getDay());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());

//Switch Statements
console.log(new Date().getDay())
if (new Date().getDay() == 5){
    console.log("Friday");
}
else if ( new Date().getDay() == 6){
    console.log("Saturday");
}
else{
    console.log("None");
}

switch(new Date().getDay()){
    case 0 : console.log("Sunday");break;
    case 2 : console.log("Tuesday");break;
    case 4 : console.log("Thursday");break;
    case 6 : console.log("Saturday");break;
    default : console.log("Friday");
}

let obj = {1: "Hello", 2: "Everyone"};
let arr = [1,2,3,4,5,6];
let idx = 0;
while(idx<arr.length)
{
    console.log(arr[idx]);
    idx++;
}
//For in loop
for (const key in obj){
    console.log(key, "->", obj[key]);
}
//For of loop
for (const value of arr) {
    console.log(value);
}