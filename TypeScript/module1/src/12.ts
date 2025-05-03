{//nullable types || unknown types

const searchName =(value:string | null)=>{
    if(value){
        console.log("Seaching for "+value);
    }else{
        console.log("not found");
    }
} 

searchName("hello");


const getSpeedMeterPerSecond = (value:unknown )=>{
    if(typeof value === "number"){
        const convertedSpeed = value * 1000/3600;
        console.log("Speed is "+convertedSpeed+" m/s");
    }else if(typeof value === "string"){
        const value1 = value.split(" ")[0]
        const convertedSpeed = parseInt(value1) * 1000/3600;
        console.log("Speed is "+convertedSpeed+" m/s"); 
    }else{
        console.log("not found");
    }
}
getSpeedMeterPerSecond("100 km/h");


//never type

function throwError(message:string):never{
    throw new Error(message);
}

throwError("This is an error message");}