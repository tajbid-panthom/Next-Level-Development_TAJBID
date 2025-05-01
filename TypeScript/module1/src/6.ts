{//learning funciton


function add(a:number,b:number) : number {
    return a+b;
}
add(2,3);

const addArrow = (a:number,b:number):number=> a+b;

addArrow(2,3);

const addDefault = (a:number,b:number = 2) :number => a+b;

addDefault(2);
addDefault(2,3);

//function overloading
const addOverload=(a:any,b:any):any =>{
    
    return a+b
}
console.log(addOverload(2, 3)); // 5

addOverload("Tajbid", "Hossain"); // "TajbidHossain"


const poorUser = {
    name:"Tajbid",
    balance: 0,
    addBalance (balance : number):number{
        return this.balance += balance;
    }
}
console.log(poorUser.addBalance(100));
console.log(poorUser.balance);
console.log(poorUser.addBalance(200));
console.log(poorUser.balance);



}