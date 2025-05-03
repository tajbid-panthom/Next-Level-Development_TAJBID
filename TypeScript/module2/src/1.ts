{//type assertion

let anything :any;
anything = true
anything  = "Next level web development";

console.log((anything as string).toUpperCase())

const kgToGm = (value: number| string):number|string|undefined=>{
    if (typeof value==="string"){
        return `The value is ${parseFloat(value)*1000}`;
    }
    else if(typeof value ==="number"){
        return value * 1000;
    }
}

const result1 = kgToGm(100) as string
console.log(result1)
const result2 = kgToGm("100") as number
console.log(result2)

type CustomError ={
    message:string
}

try { 
     
} catch (error) {
    console.log((error as CustomError).message)
}}