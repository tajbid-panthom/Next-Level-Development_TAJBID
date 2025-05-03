{//generic with interface

interface Developer <T,Y=null>{
name:string,
computer:{
    brand:string,
    model:string,
    releaseYear:number
},
smartWatch: T,
bike?:Y
}

const poorDeveloper :Developer<{brand:string,model:string,display:string}>={
name:"Tajbid",
computer:{
    brand:"Apple",
    model:"M3 Air",
    releaseYear:2024
},
smartWatch:{
    brand:"KISELECT",
    model:"U2202",
    display :"Amolead"
}
}
const richDeveloper :Developer<{brand:string,model:string},{name:string,model:string}>={
name:"Rich",
computer:{
    brand:"Apple",
    model:"M3 Pro",
    releaseYear:2024
},
smartWatch:{
    brand:"Apple",
    model:"m1",
},
bike:{
    name:"Yamaha",
    model:"r15"
}
}}