// Objec literals

let nm = "Anshul";
let age = 19;
let email = "rayanshul19";
let hobbies = ["Cricket","Football","Video Games"];

let user =
{
    nm: "Anshul",
    age: 19,
    email: "rayanshul19@gmail.com",
    hobbies: ["Cricket","Football","Video Games"],    
    login()
    {
        console.log("You are logged in");
        console.log(this);
    },
    logout()
    {
        console.log("You are logged out");
        console.log(this);
    },
    loghobbie()
    {
        console.log(this.hobbies)
    }
};

console.log(user.nm);
user.login();
user.loghobbie();
user.logout();

console.log("***********************Classes***********************");
class Profile
{
    count=0;
    constructor(name,email,age)
    {
        this.name=name;
        this.email=email;
        this.age=age;
    }

    login()
    {
        console.log(this.name," has logged in");
        // console.log(this);
        // this.name="Hardik";
        // console.log(this);
        return this;
    }
    logout()
    {
        console.log(this.name," has logged out");
        return this;
    }

    incCount()
    {
        this.count++;
        console.log(this.name," increment the count to ",this.count);
        return this;
    }
}

let us1 = new Profile("Anshul","rayanshul9@gmail.com",19);
// us1.login().incCount().incCount().logout();
let us2 = new Profile("Xyz","xyz007@gmail.com",19);
// us2.login().incCount().incCount().logout();
let us3 = new Profile("Abc","abbcc001@gmail.com",18);
/*u1.logout();
u1.incCount();*/

class Admin extends Profile
{
    deleteUser()
    {
        uarr = uarr.filter(u => user.email != u.email);
    }
}

//console.log(user1 instanceof Profile)
let adm = new Admin("Hardik","pac40@gmail.com",20);
let uarr = [us1,us2,us3];
console.log(uarr);
adm.deleteUser(us2);
console.log(uarr);
console.log("***********************Destructuring**********************");
// const arr,[a,b] = [1,2,3];
// console.log(a);
// console.log(b);
console.log("***********************Con-cats***********************");
const array1 = ['a','b','c'];
const array2 = ['1','2','3'];
const array3 = array1.concat(array2);

//Spread operator
var parts = ["shoulder","knees"];
var body = ["head","foot",...parts];
console.log(body);

let {x,y,...z} = {x:1, y:2, a:3, b:4};
console.log(x);
console.log(y);
console.log(z);

function demo (param1,...param2)
{
    console.log(param1);
    console.log(param2);
}
// demo(1,2,3,4,5,6);

console.log("**************Map Methods************");
const numbers = [1,2,3,4,5,6,7,8,9,10];
const double = numbers.map(item => item*2);
console.log(double);

hello = (para1,para2) => 
{
    return para1+para2;
}

console.log(hello("Hello"," World!"));