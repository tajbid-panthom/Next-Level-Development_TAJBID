{//generic type


type GenericType<T>  =Array<T>
// const rollNos: number[] = [1,2,3,4,5,6 ]
const rollNos: Array<number> = [1,2,3,4,5,6 ]
 
// const mentors : string[] = ["x","y","z"]
const mentors : GenericType<string> = ["x","y","z"]

const boolArray : boolean [] = [false,true,false,true, true]
type User= {
    name:string,
    age:number
}

const users : GenericType<User>=[
    {
        name:"Tajbid",
        age:21
    },
    {
        name:"Hossain",
        age:21
    }
]


//generic tuple

type GenericTuple<X,Y> = [X,Y]

const manush : GenericTuple<string,string>=["x","y"]
const userID : GenericTuple<number,{name:String,email:string}>=[12,{name:"Tajbid",email:"tajbid@gmail.com"}]}