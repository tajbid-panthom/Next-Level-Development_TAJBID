{//type alias
type Student = {
    name:string,
    age:number,
    gender:string ,
    contactNo?:string,
    addresss:string,
}

const student1 :Student={
    name:"Tajbid",
    age:20,
    gender:"male",
    contactNo:"01700000000",
    addresss:"Dhaka",
}
const student2 :Student={
    name:"Tajbid",
    age:20,
    gender:"male",
    addresss:"Dhaka",
}

console.log(student1);
console.log(student2);

type UserName= string;

type Add = (a:number,b:number)=> number;

const add:Add=(a,b)=> a+b;
const sum=add(10,20);
console.log(sum);

const userName:UserName="Tajbid";
console.log(typeof userName);}