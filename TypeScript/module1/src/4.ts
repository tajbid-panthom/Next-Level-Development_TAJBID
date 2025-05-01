{//Basic data types

//string
let firstName : string = "Tajbid";

//number
let id : number = 1;


//boolean
let isAdmin : boolean =false;

//undefined
let x : undefined = undefined;

//null
let y : null = null;

//any
let z : any = "Tajbid";
z = 1;

//void
let a : unknown = "Tajbid";
a = 1;

//array
let arr : string[] = ["Tajbid", "Taj", "Tajb"];
let arr2 : Array<number> = [1, 2, 3];

//tuple
let roll : [number,number,number] = [1, 2, 3];
let data1 : Array<[string, number]> = [["Tajbid", 1], ["Taj", 2], ["Tajb", 3]];
let data2 : [string, number][] = [["Tajbid", 1], ["Taj", 2], ["Tajb", 3]];

const array: number[]= [1, 2, 3, 4, 5, 6];

const newArr :number[] = array.map((a:number):number=>a*a)
console.log(newArr);

}