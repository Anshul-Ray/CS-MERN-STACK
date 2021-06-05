// String
let fnm = "Anshul";
let lnm = "Ray";
let nm = fnm+" "+lnm;

console.log(fnm.length);
console.log(nm);

// document.getElementById("test").innerHTML = nm;

let dnm = new String("Skip the text");
let d2nm = new String("Skip the text");
console.log(dnm);
console.log(dnm == d2nm);

console.log("****Properties****");
let str = "This is a cat";
console.log(str.indexOf("cat"));
console.log(str.lastIndexOf("cat"));

if(str.indexOf("cats")==-1)
    console.log("String not found.");

console.log(str.search("cat"))
console.log(str.slice(-14,-5));
console.log(str.slice(5));
console.log(str.slice(-14));
console.log(str.substring(5,10));
console.log(str.substr(5,2));
console.log(str.replace("cat","dog"));
console.log(str.replace(/cat/g,"dog"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());

let str2 = "I love cats!";

let str3 = str.concat(" ", str2);
console.log(str3);

let str4 = "            Hello World              ";
console.log(str4);
console.log(str4.trim().toLowerCase().replace("hello","hi"));

let num = "5";
num = num.padStart(3,"*");
console.log(num);
num = num.padEnd(5,0);
console.log(num);

let str1 = "az AZ";
console.log(str1.charAt(0));
console.log(str1.charCodeAt(0));

str1[0] = "q";
console.log(str1);

let numar = "1,2,3,4,5";
console.log(numar);
numar = numar.split(",");
console.log(numar);