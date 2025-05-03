//task1

const welcomeMessage : string = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
console.log(welcomeMessage);

//task2

const functionWithParameters = (name:string,age:number,role?:"admin"|"user"|"guest") => {
    if(role==="admin"){
        console.log(`Hello ${name}, you are ${age} years old and you are an admin.`);
    }else if(role==="user"){
        console.log(`Hello ${name}, you are ${age} years old and you are a user.`);
    }else if(role==="guest"){
        console.log(`Hello ${name}, you are ${age} years old and you are a guest.`);
    }else{
        console.log(`Hello ${name}, you are ${age} years old and you are an unknown role.`);
    }
}
functionWithParameters("Tajbid", 21);

//task3

type Person={
    name:string,
    address:string,
    hairColor?:string,
    eyeColor?:string,
    income:number,
    expenses:number,
    hobbies?:string[],
    family_members?:string[],
    job:string,
    skills:string[],
    maritalStatus:"single"|"married"|"divorced",
    friends?:string[]
}

//task4
type Book={
    title:string,
    author:string,
    publicationYear:number,
    price:number,
}
type Megazine={
    title:string,
    author:string,
    publicationYear:number,
    genre:string,
    issueNumber:number,
}

type bookAndMegazine = Book & Megazine //all properties of book and megazine

const book:bookAndMegazine={
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    publicationYear:1925,
    price:10.99,
    genre:"Fiction",
    issueNumber:1,
}
type bookOrMegazine = Book | Megazine; //either book or megazine
const book1:bookOrMegazine={
    title:"The Great Gatsby",
    author:"F. Scott Fitzgerald",
    publicationYear:1925,
    price:10.99,
    genre:"Fiction",
}
// interface Megazine extends Book{
//     issueNumber:number,
//     genre:string,
// }

// const book1:Book={
//     title:"The Great Gatsby",
//     author:"F. Scott Fitzgerald",
//     publicationYear:1925,
//     price:10.99,
// }
// const megazine:Megazine={
//     title:"National Geographic",
//     author:"National Geographic Society",
//     publicationYear:2023,
//     price:5.99,
//     issueNumber:1,
//     genre:"Science",
// }



//task5 

const reverseString =(str:string):string=>{
    return str.split("").reverse().join("")
}

console.log(reverseString("Tajbid"));

const isPalindrome = (str:string):boolean=>{
    const reversedStr = str.split("").reverse().join("");
    return str===reversedStr;
}
console.log(isPalindrome("abba"));


//task6 
const summation =(...e:number[]):number=> e.reduce((acc,ele)=>acc+ele);
console.log(summation(1,2,3,4,5,6,7))

//task7

const stringOrNumber = (ele:string|number):any=>{
    return typeof ele ==="string"? ele.length : ele*ele;
}
console.log(stringOrNumber(6))

//task8

type User= {
    name:string,
    email:string
}
type Admin = {adminlevel:"admin"|"moderator"}

type AdminUser = User & Admin;


const describeAdmin = (user:AdminUser):string=>{
    return user.adminlevel;
}
const user:AdminUser = {
    name:"Tajbid",
    email:"tajbid@gmail.com",
    adminlevel:"admin"
}
console.log(describeAdmin(user))

//task9
type Employee={
    name:string,
    address:{
        city:{
            name:string,
            street:string
        },
        division:string,
    }
}
const employee:Employee={
    name:"Rahim",
    address:{
        city:{
            name:"khulna city",
            street:""
        },
        division:"Khulna"
    }
}

const getEmployeeCity=(employee:Employee):string=>{
    return `His is from ${employee?.address?.city?.street} street from ${employee?.address?.city?.name} `
}
console.log(getEmployeeCity(employee))

//task10

const displayName = (name:string|null|undefined):string=>{
    return  name ?? "Anonymous";
    
}
console.log(displayName("tajbid"))

//task11

const unknownTypes = (ele:unknown):any=>{
    if(typeof ele ==="string") return ele.toUpperCase();
    else if(typeof ele ==="number") return Math.pow(ele,2);
}
console.log(unknownTypes(7))

//task12

const handleError = (msg : string):never=>{
    throw new Error(msg);
}
// console.log(handleError("It is a user defined error"))

//task13

function anyArray<T>(a:T[]):T[]{
    return [...new Set(a)]
}
console.log(anyArray(["tajbid","hossain","tajbid"]))


function removeDup<T>(arr:T[]):T[]{
    return arr.filter((item:any,index:number)=>arr.indexOf(item)===index);
}

console.log(removeDup(['apple', 'orange', 'apple', 'banana', 'orange']))
console.log(removeDup([1,2,3,2,4,5,3,7,6,6]))


//task14
type AUser = User & {age:number}

let userTaj:AUser;
// setTimeout(() => {
//     userTaj= {
//         name:"Tajbid",
//         email:"tajbid@gmail.com",
//         age:21
//     }
// }, 2000);
// async function fetching(){
//     await new Promise((resolve,reject)=>setTimeout(resolve,2000))
//     console.log(userTaj.name)
// }
// fetching()

//another better approach

function createUser():Promise<AUser>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                name:"Tajbid",
                email:"taj@gmail.com",
                age:21
            })
        },1000)
    })
}

async function fetching(){
    const user= await createUser();
    console.log(`User ${user.name} created with age ${user.age} and email ${user.email}`);
    return user
}
// fetching().then(user=> console.log(user))
// createUser().then(user=>console.log(user))

(async () => {
    const user = await createUser();
    console.log(`Fetched: ${user.name} (${user.age})`)})();


//task15

const isString = (value :unknown):value is string=>{
    return typeof value==="string";
}

console.log(isString(21))

{((value: unknown): void=>{
    if(typeof value ==="string") console.log(value.toUpperCase())
})("tajbid");}


//task16
//question:
    // Create a function that:
        // Takes an object and a key.
        // Returns the property value from the object based on the provided key.
        // Use keyof to constrain the key to valid properties of the object.


{function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
interface Person {
    name: string;
    age: number;
    email?: string;
  }

const person: Person = {
name: "Alice",
age: 30,
email: "alice@example.com"
};

const name = getProperty(person, "name");
const age = getProperty(person, "age");
const email = getProperty(person, "email"); 

// TypeScript errors for invalid keys
// @ts-expect-error - "address" is not a valid key
const address = getProperty(person, "address"); }