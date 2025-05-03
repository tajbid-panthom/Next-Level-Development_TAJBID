"use strict";
//task1
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const welcomeMessage = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
console.log(welcomeMessage);
//task2
const functionWithParameters = (name, age, role) => {
    if (role === "admin") {
        console.log(`Hello ${name}, you are ${age} years old and you are an admin.`);
    }
    else if (role === "user") {
        console.log(`Hello ${name}, you are ${age} years old and you are a user.`);
    }
    else if (role === "guest") {
        console.log(`Hello ${name}, you are ${age} years old and you are a guest.`);
    }
    else {
        console.log(`Hello ${name}, you are ${age} years old and you are an unknown role.`);
    }
};
functionWithParameters("Tajbid", 21);
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    price: 10.99,
    genre: "Fiction",
    issueNumber: 1,
};
const book1 = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    price: 10.99,
    genre: "Fiction",
};
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
const reverseString = (str) => {
    return str.split("").reverse().join("");
};
console.log(reverseString("Tajbid"));
const isPalindrome = (str) => {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
};
console.log(isPalindrome("abba"));
//task6 
const summation = (...e) => e.reduce((acc, ele) => acc + ele);
console.log(summation(1, 2, 3, 4, 5, 6, 7));
//task7
const stringOrNumber = (ele) => {
    return typeof ele === "string" ? ele.length : ele * ele;
};
console.log(stringOrNumber(6));
const describeAdmin = (user) => {
    return user.adminlevel;
};
const user = {
    name: "Tajbid",
    email: "tajbid@gmail.com",
    adminlevel: "admin"
};
console.log(describeAdmin(user));
const employee = {
    name: "Rahim",
    address: {
        city: {
            name: "khulna city",
            street: ""
        },
        division: "Khulna"
    }
};
const getEmployeeCity = (employee) => {
    var _a, _b, _c, _d;
    return `His is from ${(_b = (_a = employee === null || employee === void 0 ? void 0 : employee.address) === null || _a === void 0 ? void 0 : _a.city) === null || _b === void 0 ? void 0 : _b.street} street from ${(_d = (_c = employee === null || employee === void 0 ? void 0 : employee.address) === null || _c === void 0 ? void 0 : _c.city) === null || _d === void 0 ? void 0 : _d.name} `;
};
console.log(getEmployeeCity(employee));
//task10
const displayName = (name) => {
    return name !== null && name !== void 0 ? name : "Anonymous";
};
console.log(displayName("tajbid"));
//task11
const unknownTypes = (ele) => {
    if (typeof ele === "string")
        return ele.toUpperCase();
    else if (typeof ele === "number")
        return Math.pow(ele, 2);
};
console.log(unknownTypes(7));
//task12
const handleError = (msg) => {
    throw new Error(msg);
};
// console.log(handleError("It is a user defined error"))
//task13
function anyArray(a) {
    return [...new Set(a)];
}
console.log(anyArray(["tajbid", "hossain", "tajbid"]));
function removeDup(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
console.log(removeDup(['apple', 'orange', 'apple', 'banana', 'orange']));
console.log(removeDup([1, 2, 3, 2, 4, 5, 3, 7, 6, 6]));
let userTaj;
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
function createUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Tajbid",
                email: "taj@gmail.com",
                age: 21
            });
        }, 1000);
    });
}
function fetching() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield createUser();
        console.log(`User ${user.name} created with age ${user.age} and email ${user.email}`);
        return user;
    });
}
// fetching().then(user=> console.log(user))
// createUser().then(user=>console.log(user))
(() => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield createUser();
    console.log(`Fetched: ${user.name} (${user.age})`);
}))();
//task15
const isString = (value) => {
    return typeof value === "string";
};
console.log(isString(21));
{
    ((value) => {
        if (typeof value === "string")
            console.log(value.toUpperCase());
    })("tajbid");
}
