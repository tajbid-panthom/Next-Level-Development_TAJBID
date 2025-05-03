{//interface

//differences between type & alias

type User1 = {
    name:string,
    age:number
}
type UserWithRole1 = User1 & {role:string}

//diff 1 : Primitive data type can be defined by type Alias but can't be defined by Interface
const user1 : UserWithRole1={
    name:"tajbid",
    age:21,
    role:"student"
} 


interface User2{
    name:string,
    age:number
}
interface UserWithRole2 extends User2{
    role:string
}
const user2:UserWithRole2={
    name:"Tajbid",
    age:21,
    role:"student"
}

type Roll1 = number[]
interface Roll2 {
    [index : number]:number
}
const rollNumber1 : Roll1 = [1,2,3,5,6 ]
const rollNumber2 : Roll2 = [1,2,3,5,6 ]


type Add1 = (num1:number,num2 : number ) =>number ;
interface Add2{
    (num1:number, num2:number):number
}
const add1:Add1 = (a,b) => a+b;
const add2:Add2 = (a,b) => a+b;
}