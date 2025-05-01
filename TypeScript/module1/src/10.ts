{//union type

type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
type BackendDeveloper = "basicDeveloper" | "expertDeveloper";

type FullStackDeveloper = FrontendDeveloper | BackendDeveloper;

const newDeveloper2: FullStackDeveloper = "basicDeveloper";

const newDeveloper: FrontendDeveloper = "juniorDeveloper";
const newDeveloper3: FrontendDeveloper = "fakibazDeveloper";


type User = {
    name:string,
    email:string,
    gender:"male"|"female",
    bloodGroup:"A+"|"A-"|"B+"|"B-"|"O+"|"O-"|"AB+"|"AB-", 
}

const user:User={
    name:"Tajbid",
    email:"tajbid@gmail.com",
    gender:"male",
    bloodGroup:"A+",
}

type FTDev = {
    skills:string[],
    designation1:"FrontendDeveloper",
    
}
type BKDev = {
    skills:string[],
    designation2:"BackendDeveloper",
}

type FSDev = FTDev & BKDev;
const fullStackDev:FSDev={
    skills:["HTML","CSS","JavaScript","React","NodeJS"],
    designation1:"FrontendDeveloper",
    designation2:"BackendDeveloper",
}
console.log(fullStackDev);}