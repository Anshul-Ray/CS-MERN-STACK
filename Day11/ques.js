const arr = [1,2,3,4,5,6,7,8,9,10];
console.log("Array : \t", arr);
console.log("**********Map***********");
const mapp = arr.map(items => items+2);
console.log(mapp);
console.log("**********filter***********");
const filtr = arr.filter(item => ((item%2)==0))
console.log(filtr);
console.log("**********Find***********");
function checkSeven(num)
{
    return num>=7;
}
const fiind = arr.find(checkSeven); //It returns the first element that satisfies the condition
console.log(fiind);
console.log("**********FindIndexOf***********");
const indx = arr.findIndex(checkSeven);
console.log(indx);
console.log("**********Fill***********");
const fiil = arr.fill(50,4,5);
console.log(fiil);
console.log("**********Some***********");
console.log(arr.some(item => item%2==1));
console.log("**********Every***********");
console.log(arr.every(item => item%2==1));