let arr = [9,1,6,4,2,0,3]
let max = arr[0];
let min = arr[0];
for(let i=0 ; i<arr.length ; i++)
{
    if (max<arr[i])
    {max = arr[i];}
    if (min>arr[i])
    {min = arr[i];}
}
console.log("..............Without Math functions..............");
console.log("Array :",arr);
console.log("Max :", max);
console.log("Min :", min);
console.log("................With Math functions................");
console.log("Array :",arr);
console.log("Max :", Math.max.apply(null, arr));
console.log("Min :", Math.min.apply(null, arr));
console.log("................Reversing an array................");
let j=0;
function torev(arr)
{
    for (i=0, j=arr.length-1 ; i<(arr.length/2) ; i++,j--)
        {
           let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
}
torev(arr);
console.log(arr);