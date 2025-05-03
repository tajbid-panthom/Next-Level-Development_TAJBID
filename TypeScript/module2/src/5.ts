{//function with generic

const createArray = (params:string):string[]=>{
return [params]
}
const createArrayWithGenerics = <T>(params:T):T[]=>{
return [params]
}


const result1 =  createArray("bng")
const result2 = createArrayWithGenerics<boolean>(true)
type User = {
name:string,
age:number
}
const result3 = createArrayWithGenerics<User>({name:"Tajbid",age:21})


const createArrayWithTuple = <T,Y>(param1:T,param2:Y):[T,Y]=>{
return [param1,param2]
}

type User1 = {
name:string,
age:number
}
const result22 = createArrayWithTuple<boolean,User1>(true,{name:"Tajbid",age:21})

const result33 = createArrayWithTuple<User,boolean>({name:"Tajbid",age:21},true)


const addCourse = <T>(student:T)=>{
const course  = "Next Level Web Development"
return {
    ...student,
    course
}
}

const student1 = addCourse({name:"Tajbid",age:21,devType:"NLWD"})
const student2 = addCourse({name:"Hossain",age:21,hasWatch:"Apple"})
console.log(student1)}