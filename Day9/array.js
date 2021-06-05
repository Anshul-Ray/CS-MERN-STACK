let arr = [1,2,3,4,5];
const arra = [1,2,3,4]

arra.push(5);












//Loops
for (let i = 0 ; i < arr.length ; i++)
{const element = arr[i];}

function multiBy2(num,index)
{
    console.log("Index :",index,"Number :", num*2);
}

arr.forEach(multiBy2);
console.log(arr);

arr.push(6);
arr[arr.length] = 7;
console.log(arr);

//Associating arrays
let car = [];
car[0] = "BMW";
car[1] = "Audi";
console.log(car);

car["name"] = "Ferrari";
console.log(car);
console.log(car["name"]);

let arrays = new Array(1,2,3,4,5,6,7);
//let arrays = new Array(10);
// let arrays = new Array(10,20);
// arrays = [1,2,3,4,5,6,7];
console.log(arrays);

console.log(Array.isArray(arrays));
console.log(arr instanceof Object);

var veg = ["tomato", "potato", "pumpkin"];
console.log(veg.toString());
console.log(veg.join(" "));

console.log(veg.shift());
console.log(veg);

veg.unshift("tomato");
console.log(veg);

veg[0]= "onion"
console.log(veg);

delete veg[0];
console.log(veg);

veg[0] = "tomato"
console.log(veg);

veg.splice(2,0,"onion","beans");
console.log(veg);

veg.splice(1,1,"Spicy");
console.log(veg);

veg.splice(0,1);
console.log(veg);

let students = ["A","B","C"];
let guide = ["D","E","F"];
let faculty = ["G","H","I"];

let total = students.concat(guide,faculty);
console.log(total);

let scopy = total.slice(0,3);
console.log(scopy);

veg.sort();
console.log(veg);

let nums = [4,5,6,7,80,9];
console.log(nums.sort(function(a,b){return b-a;}));

//Bubble sort
for (let i=0 ; i<nums.length ; i++)
{    for(let j=0 ; j<nums.length ; j++)
     {   if(nums[j]>nums[i])
        { let temp = nums[i];
           nums[i] = nums[j];
           nums[j] = temp;
        }
     }
}
console.log(nums);     