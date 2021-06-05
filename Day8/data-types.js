//Number
var l = 16;
console.log(typeof l);

//string
var name = "Anshul"
console.log(typeof name);

let firstname="Abx"

//object
var obj ={
    "name" : "Nexon",
    brand : "TATA",
    obj2: {
        "color" : "silver",
        "year" : 2017,
        "insurances" : ["physical", "engine", "body"]
    },
    1 : 2,
    fullname : function()
{
    return this.name;
}
};
//object_name[key name]=value;
// obj["firstname"]="Anshull" //To change firstname
console.log(obj);
console.log(typeof obj)
//Fetching values
console.log(obj.firstname)
console.log(obj["lastname"])
console.log(Object.keys(obj))
console.log(Object.values(obj))

console.log(obj.obj2.insurances);
console.log(obj["obj2"]["insurances"][2])
console.log(obj.fullname())

let ar = [1,2,'3'];
console.log(ar);
console.log(ar[1]);

for (let index = 0; index < ar.length; index++) {
    const element = ar[index];
    console.log(element);
}

// Temporal dead zone is the phase between the hoisting stage 
// and till a particular variable is assigned.
console.log(p);
var p = 10; // change var to let to eliminate tdz or initialize all variables in the starting of the file.